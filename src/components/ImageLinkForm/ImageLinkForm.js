import React from 'react'
import './ImageLinkForm.css'
export default function ImageLinkForm({ onInputChange, onButtonSubmit }) {
    return (
        <div className='ma0'>
            <p className='f3 center'>{
                'This magic Brain would detect faces in your picture. Give it a try ? '
            }</p>
            <div className='center'>
                <div className='center form pa4 br3 shadow-5'>
                    <input className='f5 pa3 w-70 center' type='text' placeholder='Enter URL' onChange={onInputChange} />
                    <button className='f3 pa2 w-30 grow link ph3 pv3 dib  white bg-light-purple' onClick={onButtonSubmit} >Detect</button>
                </div>
            </div>
        </div>
    )
}
