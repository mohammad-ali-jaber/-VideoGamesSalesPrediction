from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import joblib
import numpy as np
from fastapi.middleware.cors import CORSMiddleware

model = joblib.load("modelF.pkl")

encoder = joblib.load("encoder.pkl")
scaler = joblib.load("scaler.pkl")

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class InputFeatures(BaseModel):
    platform: str
    publisher: str
    criticsScore: float
    numberOfCritics: float
    userScore: float
    otherSales: float
    rating: str
    genre: str

@app.post("/predict")
def predict_sales(features: InputFeatures):
    try:
        print("Received Input:", features)

        encoded_features = encoder.transform([[
            features.rating,
            features.genre,
            features.platform,
            features.publisher
        ]])[0]

        rating_encoded, genre_encoded, platform_encoded, publisher_encoded = encoded_features

        input_array = np.array([
            platform_encoded,
            publisher_encoded,
            features.criticsScore,
            features.numberOfCritics,
            features.userScore,
            features.otherSales,
            rating_encoded,
            genre_encoded,
        ]).reshape(1, -1)

        print("Input Array Before Scaling:", input_array)

        input_scaled = scaler.transform(input_array)

        prediction = model.predict(input_scaled)[0]

        global_sales = prediction * 151 

        return {"predicted_sales": round(global_sales, 2)}

    except HTTPException as e:
        raise e 
    except Exception as e:
        print("Error Traceback:", str(e))
        raise HTTPException(status_code=500, detail=f"Prediction failed: {str(e)}")


