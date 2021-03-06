import React from 'react'
import './FaceRecognition.css'

export default function FaceRecognition({ imageURL, box }) {
    return (
        <div>
            <div className='center ma'>
                <div className='absolute mt2'>
                    <div>
                        <img id='inputimage' src={imageURL} alt='' width='500px' height='auto' />
                        <div className='bounding-box' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
