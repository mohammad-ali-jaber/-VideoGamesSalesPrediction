import React from 'react'
import '@fontsource/inter/variable.css'
import './index.css'

function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>Video Game Sales Prediction</title>
                <meta
                    name="description"
                    content="Machine Learning Course Project"
                />
            </head>
            <body className="font-sans">{children}</body>
        </html>
    )
}

export default RootLayout
