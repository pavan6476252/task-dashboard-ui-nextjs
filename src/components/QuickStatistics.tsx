'use client'
import { useStats } from '@/data/statsContext';
import React, { useState } from 'react';

function QuickStatistics() {
    const {percentile,rank,score}= useStats()
    return (
        <div className="space-y-5 py-4 border-b">
            <h2 className="text-lg font-semibold text-gray-800">Quick Statistics</h2>
                <div className="grid grid-cols-3 divide-x w-full">
                    <div className="flex justify-center items-center">
                        <Tile
                            icon={<span>🏆</span>}
                            title={`${rank}`}
                            subtitle="Your Rank"
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <Tile
                            icon={<span>📅</span>}
                            title={`${percentile}%`}
                            subtitle="Completion Rate"
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <Tile
                            icon={<span>✅</span>}
                            title={`${score} / 15`}
                            subtitle="Tasks Completed"
                        />
                    </div>
            </div>
        </div>
    );
}

export default QuickStatistics;

interface TileProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
}

function Tile({ icon, subtitle, title }: TileProps) {
    return (
        <div className="flex space-x-3">
            <div className="w-12 h-12 bg-gray-100 text-gray-700 rounded-full flex justify-center items-center text-lg">
                {icon}
            </div>
            <div className="flex flex-col justify-center">
                <h4 className="text-xl font-bold text-gray-800">{title}</h4>
                <p className="text-sm font-medium text-gray-600">{subtitle}</p>
            </div>
        </div>
    );
}
