import React from 'react'
import JHFY from './images/江湖风云.svg'
import MXMJ from './images/木犀秘籍.svg'
import MXBD from './images/木犀宝典.svg'
import GG from './images/公告.svg'
import Share from './images/share.svg'
import Back from './images/backbutton.svg'
import './index.css'

export default function Home(props) {


    const { history } = props


    const handleNotice = () => {
        history.push('/notice')
    }
    const handleBack = () => {
        history.push('/guide')
    }

    return (
        <div className='container'>
            <div className="content1 content">
                <img src={JHFY} alt="" />
            </div>
            <div className="content2 content" >
                <img src={MXMJ} alt="" />
            </div>
            <div className="content3 content">
                <img src={MXBD} alt="" />
            </div>
            <div className="content4 content" onClick={handleNotice}>
                <img src={GG} alt="" />
            </div>
            <div className="share content">
                <img src={Share} alt="" />
                <h1>分享</h1>
            </div>
            <div className="back content" onClick={handleBack}>
                <img src={Back} alt="" />
                <h1>返回</h1>
            </div>
        </div>
    )
}
