import React, { createContext, useContext, useState, ReactNode } from 'react';

type StatsContextType = {
    rank: number;
    percentile: number;
    score: number; 
    updateScore: (newRank: number, newPercentile: number, newScore: number) => void;
};

const defaultValue: StatsContextType = {
    rank: 0,
    percentile: 0,
    score: 0, 
    updateScore: () => { },
};

const StatsContext = createContext<StatsContextType>(defaultValue);


type StatsProviderProps = {
    children: ReactNode;
};


export const StatsProvider: React.FC<StatsProviderProps> = ({ children }) => {

    const [score, setScore] = useState<{
        rank: number;
        percentile: number;
        score: number;
    }>({   rank: 4,
        percentile: 90,
        score: 10,  });

    const updateScore = (newRank: number, newPercentile: number, newScore: number) => setScore({
        rank: newRank,
        percentile: newPercentile,
        score: newScore
    });

    return (
        <StatsContext.Provider
            value={{
                rank: score.rank,
                percentile: score.percentile,
                score: score.score,
                updateScore,
            }}
        >
            {children}
        </StatsContext.Provider>
    );
};

export const useStats = () => {
    const context = useContext(StatsContext);
    if (!context) {
        throw new Error("useStats must be used within a StatsProvider");
    }
    return context;
};
