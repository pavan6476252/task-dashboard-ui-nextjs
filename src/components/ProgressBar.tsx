import React from 'react';

interface ProgressBarProps {
    title: string,
    bgColor: string;
    color: string;
    percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ title, bgColor, color, percentage }) => {
    return (

        <div className='space-y-2'>
            <h4>{title}</h4>
            <div className="flex justify-between w-full items-center space-x-5">
                <div
                    className={`${bgColor} w-full rounded-lg h-2 `}

                >

                    <div
                        className={`${color} h-full w-full  rounded-lg`}
                        style={{
                            width: `${percentage}%`,
                            transition: 'width 0.3s ease-in-out',
                        }}
                    ></div>


                </div>

                <h5 className='block'>{percentage}%</h5>

            </div>
        </div>
    );
};

export default ProgressBar;
