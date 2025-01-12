import React from 'react'
import { Link } from 'react-router-dom'

const students = [
    {
        name: 'Mohammed Ali',
        role: 'Student',
        image: require('../images/3.jpg'),
    },
    {
        name: 'Ameer Saleh',
        role: 'Student', 
        image: require('../images/4.png'),
    },
]

const teachers = [
    {
        name: 'Dr. Adnan Salman',
        role: 'Professor',
        image: require('../images/1.jpg'),
    },
    {
        name: 'Eng. Samer Al-Hawari',
        role: 'Engineer',
        image: require('../images/2.jpg'),
    },
]

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            <main className="container mx-auto px-4 py-8">
                <div className="space-y-12 text-center">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                            Video Game Sales Prediction
                        </h1>
                        <p className="text-xl text-gray-400">
                            Machine Learning Course Project
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-semibold">Our Team</h2>

                        <div className="space-y-8">
                            {/* Students Section */}
                            <div>
                                <h3 className="text-2xl font-medium mb-4">Students</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                                    {students.map((student) => (
                                        <div
                                            key={student.name}
                                            className="bg-gray-800 border border-gray-700 p-6 rounded-lg"
                                        >
                                            <img
                                                src={student.image}
                                                alt={student.name}
                                                className="w-32 h-32 mx-auto rounded-full"
                                            />
                                            <h4 className="text-xl font-medium mt-4">{student.name}</h4>
                                            <p className="text-gray-400">{student.role}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Teachers Section */}
                            <div>
                                <br/>
                                <br/>
                                <h3 className="text-2xl font-medium mb-4">Teachers</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                                    {teachers.map((teacher) => (
                                        <div
                                            key={teacher.name}
                                            className="bg-gray-800 border border-gray-700 p-6 rounded-lg"
                                        >
                                            <img
                                                src={teacher.image}
                                                alt={teacher.name}
                                                className="w-32 h-32 mx-auto rounded-full"
                                            />
                                            <h4 className="text-xl font-medium mt-4">{teacher.name}</h4>
                                            <p className="text-gray-400">{teacher.role}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Link to Prediction Page */}
                    <Link to="/predict">
                        <button className="bg-blue-600 text-white py-3 px-6 rounded-lg mt-8 text-lg">
                            Start Prediction
                        </button>
                    </Link>
                </div>
            </main>
        </div>
    )
}
