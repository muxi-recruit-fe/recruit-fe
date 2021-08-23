import React from 'react'
import BackButton from '../../components/BackButton'
import text from './text.png'
import './index.css'

export default function Notice() {
    return (
        <div className='notice-bc'>
            <BackButton />
            <div className='notice-cover'>
                <div className="notice">
                    <div className="text-lyl">
                        <img src={text} alt=''></img>
                    </div>
                </div>
            </div>
        </div>

    )
}
