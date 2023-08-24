import React from 'react'
import bg from '../../imgs/bg.png'
import back from '../../imgs/back.svg'
import reel from '../../imgs/reel.png'
import fh from '../../imgs/fh.png'
import jhfy from '../../imgs/jhfy.png'
import './meeting.css'
import { Link } from "react-router-dom"

var backgroundImage = {
    width: "100vw",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
};

export default class Meeting extends React.Component {
    render() {
        return (
            <div className="main" style={backgroundImage}>
                <div className="mask">
                    <div className="image">
                        <img src={reel} className="reel" alt=''/>
                    </div>

                    <div className="container1">
                    <img src={jhfy} className="title1-wyc" alt=''></img>
                        <div className="rotation-wyc">
                            <input type="radio" name="rotation" className="rota_input1" defaultChecked={true}></input>
                            <img src='http://muxi-fresh.muxixyz.com/muxijianghu_03.jpg' className="image" alt=''></img>
                           
                            <input type="radio" name="rotation" className="rota_input3" defaultChecked={true}></input>
                            <img src='http://muxi-fresh.muxixyz.com/muxijianghu_11.jpg' className="image" alt=''></img>

                            <input type="radio" name="rotation" className="rota_input4" defaultChecked={true}></input>
                            <img src='http://muxi-fresh.muxixyz.com/muxijianghu_10.jpg' className="image" alt=''></img>

                            <input type="radio" name="rotation" className="rota_input2"></input>
                            <img src='http://muxi-fresh.muxixyz.com/muxijianghu_06.jpg' className="image" alt=''></img>
                        </div>
                    </div>

                    <div className="container">
                        <div className="title">群贤毕集</div><br/>

                        <div className="text">秘密基地的全体大会是团队运作必不可少的一部分</div>

                        <div className="btn">
                          <Link to={'/join'} className="link"> <div className="next-wyc">NEXT</div> </Link> 
                          <Link to={'/travel'} className="link"><div className="previous">PREV</div></Link>
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