import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import Brain from './Brain2.png';

export default function Logo() {
    return (
        <div className='ma4 mt0 '>
            <Tilt className="Tilt br3 shadow-2" options={{ max: 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner">
                    <img src={Brain} alt='Logo of  brain ' />
                </div>
            </Tilt>
        </div>
    )
}
