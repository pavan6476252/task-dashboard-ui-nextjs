import React from 'react'
import LanguageDetails from './LanguageDetails'
import QuickStatistics from './QuickStatistics'
import ComparisionGraph from './ComparisionGraph'

function SkillTest() {
    return (
        <div className='space-y-6'>
            <h1>Skill Test</h1>
            <LanguageDetails />
            <QuickStatistics />
            <ComparisionGraph/>

        </div>
    )
}

export default SkillTest