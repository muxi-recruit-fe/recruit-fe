import React from 'react'
import bg from '../../imgs/bg.svg'
import back from '../../imgs/back.svg'
import reel from '../../imgs/reel.svg'
import pic1 from '../../imgs/01.jpeg'
import pic2 from '../../imgs/02.jpeg'
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
                        <img src={reel} className="reel" />
                    </div>

                    <div className="container1">
                        <div className="title1"> 江湖风云 </div>
                        <div className="rotation">
                            <input type="radio" name="rotation" className="rota_input" defaultChecked={true}></input>
                            <img src={pic1} className="image"></img>

                            <input type="radio" name="rotation" className="rota_input"></input>
                            <img src={pic2} className="image"></img>
                        </div>
                    </div>

                    <div className="container">
                        <div className="title">华山论剑  Hachthon</div>

                        <div className="text">极限24小时内各组配合创作出有趣创新的产品</div>
                        
                        <div className="btn">
                          <Link to={'/travel'} className="link"> <div className="next">NEXT</div> </Link> 
                        </div>
                    </div>
                    <div>
                        <Link to={'/home'}><img src={back} className="back" /></Link> 
                        <div className="back1" >返回</div>
                    </div>
                </div>
            </div>
        )
    }
}