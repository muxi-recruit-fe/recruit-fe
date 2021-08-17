import React from 'react'
import bg from '../../imgs/bg.svg'
import back from '../../imgs/back.svg'
import reel from '../../imgs/reel.svg'
import pic5 from '../../imgs/05.jpeg'
import pic6 from '../../imgs/06.jpeg'
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
                        <img src={reel} className="reel" />
                    </div>

                    <div className="container1">
                    <div className="title1"> 江湖风云 </div>
                        <div className="rotation">
                            <input type="radio" name="rotation" className="rota_input" defaultChecked={true}></input>
                            <img src={pic5} className="image"></img>

                            <input type="radio" name="rotation" className="rota_input"></input>
                            <img src={pic6} className="image"></img>
                        </div>
                    </div>

                    <div className="container">
                        <div className="title">秋游+别墅轰趴</div>

                        <div className="text">琳琅满目的零食，火热且快乐的轰趴活动，是团队通往快乐星球的秘籍！</div>
                        <br/>
                        <div className="btn">
                          <Link to={'/meeting'} className="link"> <div className="next">NEXT</div> </Link> 
                          <Link to={'/hackathon'} className="link"><div className="previous">PREVIOUS</div></Link> 
                        </div>
                    </div>
                    <div>
                        <Link to={'/home'}><img src={back} className="back" /> </Link>
                        <div className="back1" >返回</div>
                    </div>
                </div>
            </div>
        )
    }
}