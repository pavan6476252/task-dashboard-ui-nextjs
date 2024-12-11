import { useStats } from "@/data/statsContext";
import React, { useEffect, useState } from "react";
import hmtlLogo from '/public/html-logo.png';
import Image from "next/image";

interface UpdateScoresModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const UpdateScoresModal: React.FC<UpdateScoresModalProps> = ({
    isOpen,
    onClose,
}) => {
    const { rank, percentile, score, updateScore } = useStats();

    const [newRank, setRank] = useState<number>(rank);
    const [newPercentile, setPercentile] = useState<number>(percentile);
    const [newScore, setScore] = useState<number>(score);
    useEffect(() => {
        if (isOpen) {
            setRank(rank);
            setPercentile(percentile);
            setScore(score);
        }
    }, [isOpen, rank, percentile, score]);


    if (!isOpen) return null;

    const handleSave = () => {
        updateScore(newRank, newPercentile, newScore);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 space-y-6">
                <div className="flex w-full justify-between ">

                    <h2 className="text-xl font-bold">Update Scores</h2>
                    <Image
                        src={hmtlLogo}
                        width={40}
                        height={40}
                        alt="Picture of the html"
                    />
                </div>
                <div className="space-y-4">

                    <div className="flex items-center space-x-3">
                        <span className="w-8 h-8 rounded-full bg-blue-500 text-white flex justify-center items-center font-bold">
                            1
                        </span>
                        <div className="flex-1">
                            <label className="font-semibold">
                                Update your <span className="text-black">Rank</span>
                            </label>
                        </div>
                        <input
                            type="number"
                            value={newRank}
                            onChange={(e) => setRank(Number(e.target.value))}
                            className="border border-gray-300 rounded-lg w-16 text-center p-1"
                        />
                    </div>

                    <div className="flex items-center space-x-3">
                        <span className="w-8 h-8 rounded-full bg-blue-500 text-white flex justify-center items-center font-bold">
                            2
                        </span>
                        <div className="flex-1">
                            <label className="font-semibold">
                                Update your <span className="text-black">Percentile</span>
                            </label>
                        </div>
                        <input
                            type="number"
                            value={newPercentile}
                            onChange={(e) => setPercentile(Number(e.target.value))}
                            className="border border-gray-300 rounded-lg w-16 text-center p-1"
                        />
                    </div>

                    <div className="flex items-center space-x-3">
                        <span className="w-8 h-8 rounded-full bg-blue-500 text-white flex justify-center items-center font-bold">
                            3
                        </span>
                        <div className="flex-1">
                            <label className="font-semibold">
                                Update your <span className="text-black">Current Score</span> (out
                                of 15)
                            </label>
                        </div>
                        <input
                            type="number"
                            value={newScore}
                            onChange={(e) => setScore(Number(e.target.value))}
                            className="border border-gray-300 rounded-lg w-16 text-center p-1"
                        />
                    </div>
                </div>
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={onClose}
                        className="text-blue-500 hover:underline focus:outline-none"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        Save →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateScoresModal;
