import React from 'react'
import bg from '../../imgs/bg.png'
import back from '../../imgs/back.svg'
import reel from '../../imgs/reel.png'
import pic5 from '../../imgs/05.jpg'
import pic6 from '../../imgs/06.jpg'
import fh from '../../imgs/fh.png'
import jhfy from '../../imgs/jhfy.png'
import './travel.css'
import { Link } from "react-router-dom"

var backgroundImage = {
    width: "100vw",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
};

export default class Travel extends React.Component {
    render() {
        return (
            <div className="main" style={backgroundImage}>
                <div className="mask">
                    <div className="image">
                        <img src={reel} className="reel"  alt=''/>
                    </div>

                    <div className="container1">
                        <img src={jhfy} className="title1-wyc" alt=''></img>
                        <div className="rotation-wyc">
                            <input type="radio" name="rotation" className="rota_input1" defaultChecked={true}></input>
                            <img src={pic5} className="image" alt=''></img>

                            <input type="radio" name="rotation" className="rota_input2"></input>
                            <img src={pic6} className="image" alt=''></img>
                        </div>
                    </div>

                    <div className="container">
                        <div className="title">秋游+别墅轰趴</div>

                        <div className="text">琳琅满目的零食，火热且快乐的轰趴活动，是团队通往快乐星球的秘籍！</div>
                        <br/>
                        <div className="btn">
                          <Link to={'/meeting'} className="link"> <div className="next-wyc">NEXT</div> </Link> 
                          <Link to={'/hackathon'} className="link"><div className="previous">PREV</div></Link> 
                        </div>
                    </div>
                    <div>
                        <Link to={'/home'}><img src={back} className="back-wycy" alt=''/> </Link>
                        <img src={fh} className="back1-wyc" alt=''/>
                    </div>
                </div>
            </div>
        )
    }
}