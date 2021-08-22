import React, { useState } from 'react'
import './index.css'
import enterbutton from './images/button.png'

export default function Guide(props) {
    const { history } = props
    const [guideStyle, setGuideStyle] = useState({})
    const [coverStyle, setCoverStyle] = useState({})
    const [buttonStyle, setButtonStyle] = useState({})

    const handleEnter = () => {
        setGuideStyle({
            position: 'relative',
            height: '70vh',
            width: '100vw',
            backgroundImage: "url(/static/media/guide.ed8b4ff4.png)",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: "top center",
            backgroundSize: 'contain',
            transform: ' translateY(0)',
            animation: '1s spring forwards',
            zIndex: 5
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

        setTimeout(function () {
            history.push('/home')
        }, 1500)
    }




    return (
        <div className='container-lyl'>
            <div className="cover-lyl" style={coverStyle}></div>
            <div className="guide-lyl" style={guideStyle}></div>
            <div className='enter-button' onClick={handleEnter} style={buttonStyle}>
                <img src={enterbutton} alt=''></img>
            </div>
        </div>
    )
}
