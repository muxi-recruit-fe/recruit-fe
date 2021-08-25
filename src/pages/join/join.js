import React from 'react'
import bg from '../../imgs/bg.png'
import back from '../../imgs/back.svg'
import reel from '../../imgs/reel.png'
import code from '../../imgs/code.png'
import fh from '../../imgs/fh.png'
import jhfy from '../../imgs/jhfy.png'
import './join.css'
import { Link } from "react-router-dom"


var backgroundImage = {
    width: "100vw",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
};


export default class Join extends React.Component {
    render() {
        return (
            <div className="main" style={backgroundImage}>
                <div className="mask">
                    <div className="image1">
                        <img src={reel} className="reel" alt=''/>
                    </div>

                    <div className="container1">
                    <img src={jhfy} className="title1-wyc" alt=''></img>
                        <img src={code} className = "code" alt=''></img>
                    </div>

                    <div className="container">
                        <div className="title">加入我们</div>

                        <div className="text1">扫码加入木犀秋招群 QQ：1145356279</div>
                        
                        <div className="btn">
                            <Link to={'/introduction'} className="link"> <div className="next1">NEXT</div> </Link>
                            <Link to={'/meeting'} className="link"><div className="previous">PREV</div> </Link>
                        </div>
                    </div>
                    <div>
                        <Link to={'/home'}> <img src={back} className="back-wycy" alt=''/> </Link>
                        <img src={fh} className="back1-wyc" alt=''/>
                    </div>
                </div>
            </div>
        )
    }
}