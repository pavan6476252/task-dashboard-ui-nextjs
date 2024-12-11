'use client'
import React, { useState } from 'react'
import UpdateScoresModal from './UpdateScoresModel';
import { useStats } from '@/data/statsContext';

import hmtlLogo from '/public/html-logo.png';
import Image from 'next/image';
function LanguageDetails() {

    const [isModelOpen, setModelState] = useState(false);

    return (
        <>
            <UpdateScoresModal isOpen={isModelOpen} onClose={() => setModelState(s => !s)} />
            <div className='flex w-full items-center justify-between space-x-5 border-t border-b py-5'>
                <Image  
                    src={hmtlLogo}
                    width={40}
                    height={40}
                    alt="Picture of the html"
                />
                <div className='w-full'>
                    <h4>Hyper Text Markup Language</h4>
                    <p>Questions: 08 | Duration: 15 mins | Submited on 5 June 2021</p>
                </div>
                <button onClick={() => setModelState(true)} className='px-5 py-2 bg-blue-950 rounded-md text-white'>
                    Update
                </button>
            </div>
        </>
    )
}

export default LanguageDetails