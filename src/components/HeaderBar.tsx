import React from 'react';

export default function HeaderBar() {
    return (
        <header className="sticky top-0 flex items-center justify-between bg-white border-b-2 px-4 py-3">
            <h1 className="text-xl font-bold text-black">WhatBytes</h1>
            <div className="flex space-x-2 items-center p-1 border rounded-md">
                <div className='w-5 h-5  rounded-full border '></div>
                <h4 className='text-sm font-semibold text-black'>Johny Test</h4>
            </div>
        </header>
    );
}
