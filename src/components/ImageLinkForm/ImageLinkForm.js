import React from 'react'
import './ImageLinkForm.css'
export default function ImageLinkForm() {
    return (
        <div>
            <p className='f3 center'>{
                'this magic Brain would detect faces in your picture. Give it a try ? '
            }</p>
            <div className='center'>
                <div className='center form pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' placeholder='Enter URL' />
                    <button className='f4 pa2 w-30 grow link ph3 pv3 dib  white bg-light-purple'  >Detect</button>
                </div>
            </div>
        </div>
    )
}
