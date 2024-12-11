import React from 'react'
import ProgressBar from './ProgressBar'

function SyllabusWiseAnalysis() {
    return (
        <div className='space-y-5 p-5 border rounded-md'>
            <h2>Syllabus Wise Analysis</h2>
            <ProgressBar key={'1'} title='HTML Tools , Form ,History' bgColor='bg-red-200' color='bg-red-900' percentage={70} />
            <ProgressBar key={'1'} title='HTML Tools , Form ,History' bgColor='bg-red-200' color='bg-red-900' percentage={60} />
            <ProgressBar key={'1'} title='HTML Tools , Form ,History' bgColor='bg-red-200' color='bg-red-900' percentage={90} />

        </div>
    )
}

export default SyllabusWiseAnalysis