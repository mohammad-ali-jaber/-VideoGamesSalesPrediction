import React, { useState } from 'react'
import '../../App.css';
import videoImage from '../../images/5.png'
import { Link } from 'react-router-dom'

function PredictPage() {
    const [formData, setFormData] = useState({
        platform: '',
        publisher: '',
        criticsScore: '',
        numberOfCritics: '',
        userScore: '',
        otherSales: '',
        rating: '',
        genre: ''
    })

    const [prediction, setPrediction] = useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Sending formData:", formData); // Debug log
    
        try {
            const response = await fetch("http://127.0.0.1:8000/predict", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            setPrediction(data.predicted_sales);
        } catch (error) {
            console.error("Error fetching prediction:", error);
            alert("An error occurred while fetching the prediction. Please try again.");
        }
    };
    
    
    

    const handleChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value
        }))
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            <main className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h1 className="text-3xl font-bold text-center">
                        Predict Video Game Sales
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-800 border-gray-700 p-6 rounded-lg">
                            <form onSubmit={handleSubmit} className="space-y-4">

                                {/* Rating */}
                                <div className="space-y-2">
                                    <label htmlFor="rating" className="block">Rating</label>
                                    <select
                                        id="rating"
                                        value={formData.rating}
                                        onChange={(e) => handleChange('rating', e.target.value)}
                                        className="bg-gray-700 w-full p-2 rounded"
                                    >
                                        <option value="">Select Rating</option>
                                        <option value="E">E</option>
                                        <option value="T">T</option>
                                        <option value="M">M</option>
                                        <option value="E10+">E10+</option>
                                        <option value="Ec">EC</option>
                                        <option value="Ka">K-A</option>
                                        <option value="Rp">RP</option>
                                        <option value="Ao">AO</option>

                                    </select>
                                </div>

                                {/* Platform */}
                                <div className="space-y-2">
                                    <label htmlFor="platform" className="block">Platform</label>
                                    <select
                                        id="platform"
                                        value={formData.platform}
                                        onChange={(e) => handleChange('platform', e.target.value)}
                                        className="bg-gray-700 w-full p-2 rounded"
                                    >
                                        <option value="">Select platform</option>
                                        <option value="Ds">DS</option>
                                        <option value="Ps3">PS3</option>
                                        <option value="Wii">Wii</option>
                                        <option value="X360">X360</option>
                                        <option value="psp">PSP</option>
                                        <option value="Ps">PS</option>
                                        <option value="Pc">PC</option>
                                        <option value="xb">XB</option>
                                        <option value="gba">GBA</option>
                                        <option value="gc">GC</option>
                                        <option value="3ds">3DS</option>
                                        <option value="Psv">PSV</option>
                                        <option value="ps4">PS4</option>
                                        <option value="n64">N64</option>
                                        <option value="xone">XOne</option>
                                        <option value="snes">SNES</option>
                                        <option value="sat">SAT</option>
                                        <option value="wiiU">WiiU</option>
                                        <option value="2600">2600</option>
                                    </select>
                                </div>

                                {/* Genre */}
                                <div className="space-y-2">
                                    <label htmlFor="genre" className="block">Genre</label>
                                    <select
                                        id="genre"
                                        value={formData.genreenre}
                                        onChange={(e) => handleChange('genre', e.target.value)}
                                        className="bg-gray-700 w-full p-2 rounded"
                                    >
                                        <option value="">Select Genre</option>
                                        <option value="Action">Action</option>
                                        <option value="Sports">Sports</option>
                                        <option value="Misc">Misc</option>
                                        <option value="RolePlaying">Role-Playing</option>
                                        <option value="Shooter">Shooter</option>
                                        <option value="Adventure">Adventure</option>
                                        <option value="Racing">Racing</option>
                                        <option value="Platform">Platform</option>
                                        <option value="Simulation">Simulation</option>
                                        <option value="Fighting">Fighting</option>
                                        <option value="Strategy">Strategy</option>
                                        <option value="Puzzle">Puzzle</option>
                                    </select>
                                </div>

                                {/* Publisher */}
                                <div className="space-y-2">
                                    <label htmlFor="publisher" className="block">Publisher</label>
                                    <input
                                        id="publisher"
                                        value={formData.publisher}
                                        onChange={(e) => handleChange('publisher', e.target.value)}
                                        placeholder="enter the publisher "
                                        className="bg-gray-700 w-full p-2 rounded"
                                    />
                                </div>

                                {/* Critics Score */}
                                <div className="space-y-2">
                                    <label htmlFor="criticsScore" className="block">Critics Score</label>
                                    <input
                                        id="criticsScore"
                                        type="number"
                                        placeholder="enter a value between [0,100]"
                                        value={formData.criticsScore}
                                        onChange={(e) => {
                                            const value = parseFloat(e.target.value);
                                            if (value >= 0 && value <= 100) {
                                                handleChange('criticsScore', value);
                                            } else if (e.target.value === '') {
                                                handleChange('criticsScore', '');
                                            }
                                        }}
                                        className="bg-gray-700 w-full p-2 rounded"
                                        min="0"
                                        max="100"
                                    />
                                </div>


                                {/* Number of Critics */}
                                <div className="space-y-2">
                                    <label htmlFor="numberOfCritics" className="block">Number of Critics</label>
                                    <input
                                        id="numberOfCritics"
                                        type="number"
                                        value={formData.numberOfCritics}
                                        onChange={(e) => handleChange('numberOfCritics', e.target.value)}
                                        className="bg-gray-700 w-full p-2 rounded"
                                    />
                                </div>

                                {/* Other Sales */}
                                <div className="space-y-2">
                                    <label htmlFor="otherSales" className="block">Other Sales</label>
                                    <input
                                        id="otherSales"
                                        type="number"
                                        value={formData.otherSales}
                                        onChange={(e) => handleChange('otherSales', e.target.value)}
                                        className="bg-gray-700 w-full p-2 rounded"
                                    />
                                </div>

                                {/* User Score */}
                                <div className="space-y-2">
                                    <label htmlFor="userScore" className="block">User Score</label>
                                    <input
                                        id="userScore"
                                        type="number"
                                        placeholder="enter a value between [0,10]"
                                        value={formData.userScore}
                                        onChange={(e) => {
                                            const value = parseFloat(e.target.value);
                                            if (value >= 0 && value <= 10) {
                                                handleChange('userScore', value);
                                            } else if (e.target.value === '') {
                                                handleChange('userScore', '');
                                            }
                                        }}
                                        className="bg-gray-700 w-full p-2 rounded"
                                        min="0"
                                        max="10"
                                    />
                                </div>


                                <button type="submit" className="bg-blue-500 w-full p-2 rounded">
                                    Predict Sales
                                </button>
                            </form>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-gray-800 border-gray-700 p-6 rounded-lg">
                                <h2 className="text-xl font-semibold mb-4">Genre Distribution</h2>
                                <div className="relative aspect-square">
                                    <img
                                        src={videoImage}
                                        alt="Video Game Genre Distribution"
                                        className="rounded-lg"
                                    />
                                </div>
                            </div>

                            {prediction !== null && (
                                <div className="bg-gray-800 border-gray-700 p-6 rounded-lg">
                                    <h2 className="text-xl font-semibold mb-2">Predicted Sales</h2>
                                    <p className="text-2xl font-bold text-green-400">
                                        ${prediction.toLocaleString()}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Link to="/">
                <div className="flex justify-center items-center mt-8">
                    <button className="bg-blue-600 bg-blue-6000 text-white py-3 px-6 rounded-lg text-lg">
                        Back to Home Page
                    </button>
                </div>
            </Link>

        </div>
    )
}

export default PredictPage
