import React from 'react';
import './Rank.css'

export default function Rank({ name, entries }) {
    return (
        <div className='new set'>
            <div className='f2  white new-1'>
                <p>{`${name} your rank is ...`}</p>
            </div>
            <div className='f1 white new-2'>
                <p>{`#${entries}`}</p>
            </div>
        </div>
    )
}
