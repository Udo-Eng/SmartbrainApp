import React from 'react';
import './Rank.css'

export default function Rank({ name,entries }) {
    return (
        <div>
            <div className='f2  white   '>
                <p>{`${name} your rank is ...`}</p>
            </div>
            <div className='f1 white'>
                <p>{`#${entries}`}</p>
            </div>
        </div>
    )
}
