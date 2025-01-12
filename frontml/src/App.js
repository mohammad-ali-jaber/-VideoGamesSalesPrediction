import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Layout from './components/Layout';
import HomePage from './app/HomePage.js'
import PredictPage from './app/predict/PredictPage.js'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />
          {/* Predict Page */}
          <Route path="/predict" element={<PredictPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
