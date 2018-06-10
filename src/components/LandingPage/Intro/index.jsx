import React from 'react'
import Typed from 'react-typed'
import './styles.scss'
const Intro = () =>
    <div className="intro">
        <div className="intro-content">
            <h1>I'm Ismail Ghallou</h1>
            <p><Typed 
                strings={['Also known as Smakosh, a self-taught Graphic, UI/UX Designer and full stack developer.']} 
                typeSpeed={40} 
            /></p>
            <a href="https://docs.google.com/document/d/1yxCORtBMNxj_ukgOxoYQfRu3HTUqjtNXwcMajzcftF8" target="_blank" className="magical-btn">View resume</a>
        </div>
    </div>

export { Intro }
