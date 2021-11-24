import React from 'react'

export default function FaceRecognition({ imageURL }) {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' src={imageURL} alt='' width='500px' height='auto' />
                <div className='bounding-box'>

                </div>
            </div>
        </div>
    )
}
