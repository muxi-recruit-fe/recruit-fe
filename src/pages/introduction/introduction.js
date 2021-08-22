import React from 'react'
import bg from '../../imgs/bg.png'
import back from '../../imgs/back.svg'
import reel from '../../imgs/reel.png'
import fh from '../../imgs/fh.png'
import jhfy from '../../imgs/jhfy.png'
import './introduction.css'
import { Link } from "react-router-dom"


var backgroundImage = {
    width: "100vw",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
};


export default class Introduction extends React.Component {
    render() {
        return (
            <div className="main" style={backgroundImage}>
                <div className="mask">
                    <div className="image1">
                        <img src={reel} className="reel" alt=''/>
                    </div>

                    <div className="container1">
                    <img src={jhfy} className="title1-wyc" alt=''></img>
                        <div className="title2">团队介绍</div>
                        <div className="text2">       木犀团队是华中师范大学的学生自主创建并运营的互联网团队。
                            2012年成立的木犀，已经与华师携手成长七年。目前，团队成员已达上百人，一同努力融洽地守护着这个大家庭。
                            木犀也为学长学姐在互联网行业方向做出指引：优秀的前辈去到了字节跳动、腾讯、阿里等企业；以团队成员为核心的项目，在各比赛中取得了优异的成绩…
                        </div>
                    </div>

                    <div className="btn1">
                        <Link to={'/join'} className="link"><div className="previous">PREV</div></Link>
                    </div>
                    <div>
                        <Link to={'/home'}><img src={back} className="back-wyc" alt=''/> </Link>
                        <img src={fh} className="back1-wyc" alt=''/>
                    </div>
                </div>
            </div>
        )
    }
}