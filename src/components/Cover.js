import React from 'react'
import background from '../images/pexels-lukas-574069.jpg'

export default function Cover() {
    return (
        <>
            <img id="landing" src={background} className="header-image" />
            <div className="header-image-overlay">
                <div className="header-image-textbox">
                    <h2>Hello, I’m Jonathan Heard. </h2>
                    <h3>I want to make things that make a difference</h3>
                </div>
            </div>
        </>
    )
}
