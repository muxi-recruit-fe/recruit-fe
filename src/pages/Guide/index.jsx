import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import enterbutton from './images/button.svg'

export default function Guide() {

    const [guideStyle, setGuideStyle] = useState({})
    const [coverStyle, setCoverStyle] = useState({})
    const [buttonStyle, setButtonStyle] = useState({})

    const handleEnter = () => {
        setGuideStyle({
            height: "70vh",
            width: "100vw",
            backgroundImage: " url(/static/media/guide.05838b12.svg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: " top center",
            backgroundSize: "contain",
            transform: "translateY(0)",
            animation: "0.6s spring forwards"
        })

        setCoverStyle({
            position: "absolute",
            top: "0",
            height: "100vh",
            width: "100vw",
            backgroundColor: "black",
            opacity: "0",
            transition: "opacity 3s ",
            zIndex: "3"
        })

        setButtonStyle({
            width: '100vw',
            height: '25vh',
            animation: "1s zoom forwards"
        })
    }




    return (
        <div className='container'>
            <div className="guide" style={guideStyle}>
            </div>
            <Link to='/home'>
                <div className='enter-button' onClick={handleEnter} style={buttonStyle}>
                    <img src={enterbutton} alt=''></img>
                </div>
                <div className='cover' style={coverStyle}></div>
            </Link>
        </div>
    )
}
