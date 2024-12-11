'use client'
import React from 'react';
import {
    LineChart,
    Line,
    ResponsiveContainer,
    XAxis,
    Tooltip,
    YAxis,
} from 'recharts';

function ComparisionGraph() {


    return (
        <div className=' py-4 border-b space-y-10'>

            <div className="flex space-x-5">
                <div className="flex flex-col  w-full   justify-center  space-y-3">
                    <h2 className="text-lg font-semibold text-gray-800 ">Comparision Graph</h2>
                    <p className='' >You scored 30% percentile which is lower than the average percentile in 72% all engineers who took this assessment</p>

                </div>
                <div className="w-12 h-12 bg-gray-100 text-gray-700 rounded-full flex justify-center items-center text-lg">
                    📈
                </div>

            </div>
            <Chart />
        </div>
    );
}

export default ComparisionGraph;

const data = [
    { percentage: 0, numberOfStudents: 5 },
    { percentage: 20, numberOfStudents: 16 },
    { percentage: 25, numberOfStudents: 15 },
    { percentage: 30, numberOfStudents: 8 },
    { percentage: 50, numberOfStudents: 25 },
    { percentage: 60, numberOfStudents: 20 },
    { percentage: 75, numberOfStudents: 25 },
    { percentage: 80, numberOfStudents: 20 },
    { percentage: 100, numberOfStudents: 10 },
];
 

function Chart() {
    
    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer >
                <LineChart data={data}>
                    <Line
                        type="monotone"
                        dataKey="numberOfStudents"
                        stroke="#8884d8"
                        strokeWidth={2}
                    />
                    <XAxis
                        dataKey="percentage"
                        axisLine={false}
                        ticks={[0, 25, 50, 75, 100]}
                    />

                    <Tooltip  />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

