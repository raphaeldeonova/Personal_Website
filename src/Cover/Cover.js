import React from 'react'
import './Cover.css'
import {ReactComponent as SvgPhoto} from "./photo.svg"

function Cover() {
    return (
        <div className="CoverContainer">
            <div className="CoverText">
                <h1>Raphael</h1>
                <h2>Deonova</h2>
                <p>A short biography</p>
            </div>
            <div className="CoverImage">
                <SvgPhoto className = "SVGPhoto" />
            </div>
        </div>
    )
}

export default Cover;