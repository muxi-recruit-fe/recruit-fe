import React from 'react'
import bg from '../../imgs/bg.svg'
import back from '../../imgs/back.svg'
import reel from '../../imgs/reel.svg'
import pic3 from '../../imgs/03.jpeg'
import pic4 from '../../imgs/04.jpeg'
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
                    <div className="title1"> 江湖风云 </div>
                        <div className="rotation">
                            <input type="radio" name="rotation" className="rota_input" defaultChecked={true}></input>
                            <img src={pic3} className="image" alt=''></img>

                            <input type="radio" name="rotation" className="rota_input"></input>
                            <img src={pic4} className="image" alt=''></img>
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
                        <Link to={'/home'}> <img src={back} className="back-wyc" alt=''/> </Link>
                        <div className="back1" >返回</div>
                    </div>
                </div>
            </div>
        )
    }
}