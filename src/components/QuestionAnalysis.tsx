"use client";
import React from "react";
import { useStats } from "@/data/statsContext";

function QuestionAnalysis() {
    const { score, percentile } = useStats();



    return (
        <div className="space-y-5 p-5 border rounded-md flex flex-col justify-center items-center ">
            <div className="flex justify-between w-full">
                <h2 className="text-lg font-semibold">Question Analysis</h2>
                <h2 className="font-bold text-blue-800">{score} / 15</h2>
            </div>

            <p className="text-gray-700">
                <b>You scored {score} questions correct out of 15.</b> However, it still needs some improvement.
            </p>


            <Pie colour={"blue"} percentage={percentile} />

        </div>
    );
}

export default QuestionAnalysis;


const cleanPercentage = (percentage: number) => {
    const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0;
    const isTooHigh = percentage > 100;
    return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
};
const Circle = ({ colour, percentage }: { colour: String, percentage: number }) => {
    const r = 70;
    const circ = 2 * Math.PI * r;
    const strokePct = ((100 - percentage) * circ) / 100;
    return (
        <circle
            r={r}
            cx={100}
            cy={100}
            fill="transparent"
            stroke={strokePct !== circ ? colour : undefined}
            strokeWidth={"1.3rem"}
            strokeDasharray={circ}
            strokeDashoffset={percentage}
        ></circle>
    );
};




const Pie = ({ colour, percentage }: { percentage: number, colour: String }) => {
    const pct = cleanPercentage(percentage);
    return (
        <svg width={200} height={200}>
            <g transform={`rotate(-90 ${"100 100"})`}>
                <Circle colour={colour} percentage={pct} />
            </g>

            <text
                x="50%"
                y="50%"
                dominantBaseline="central"
                textAnchor="middle"
                fontSize={"1.5em"}
            >🎯
            </text>
        </svg>
    );
};