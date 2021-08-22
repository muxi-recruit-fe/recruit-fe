import React from 'react'
import bg from '../../imgs/bg.png'
import back from '../../imgs/back.svg'
import reel from '../../imgs/reel.png'
import pic1 from '../../imgs/01.jpg'
import pic2 from '../../imgs/02.jpg'
import fh from '../../imgs/fh.png'
import jhfy from '../../imgs/jhfy.png'
import './hackathon.css'
import { Link } from "react-router-dom"


var backgroundImage = {
    width: "100vw",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
};


export default class Hackathon extends React.Component {
    render() {
        return (
            <div className="main" style={backgroundImage}>
                <div className="mask">
                    <div className="image1">
                        <img src={reel} className="reel" alt=''/>
                    </div>

                    <div className="container1">
                        <img src={jhfy} className="title1-wyc" alt=''></img>
                        <div className="rotation-wyc">
                            <input type="radio" name="rotation" className="rota_input" defaultChecked={true}></input>
                            <img src={pic1} className="image" alt=''></img>

                            <input type="radio" name="rotation" className="rota_input"></input>
                            <img src={pic2} className="image" alt=''></img>
                        </div>
                    </div>

                    <div className="container">
                        <div className="title">华山论剑  Hachthon</div>

                        <div className="text">极限24小时内各组配合创作出有趣创新的产品</div>
                        
                        <div className="btn">
                          <Link to={'/travel'} className="link"> <div className="next-wyc">NEXT</div> </Link> 
                        </div>
                    </div>
                    <div>
                        <Link to={'/home'}><img src={back} className="back-wyc"  alt=''/></Link> 
                        <img src={fh} className="back1-wyc" alt=''/>
                    </div>
                </div>
            </div>
        )
    }
}