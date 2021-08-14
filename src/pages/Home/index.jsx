import React, { useState } from 'react'
import JHFY from './images/江湖风云.svg'
import MXMJ from './images/木犀秘籍.svg'
import MXBD from './images/木犀宝典.svg'
import GG from './images/公告.svg'
import Share from './images/share.svg'
import Back from './images/backbutton.svg'
import './index.css'

export default function Home(props) {


    const { history } = props
    const [content, setContent] = useState()

    const handleNotice = () => {
        history.push('/notice')
    }
    const handleBack = () => {
        history.push('/guide')
    }
    const handleContent = (id) => {
        return () => {
            switch (id) {
                case 0:
                    setContent(id)
                    break;
                case 1:
                    setContent(id)
                    break;
                case 2:
                    setContent(id)
                    break;
                case 3:
                    setContent(id)
                    setTimeout(() => {
                        handleNotice()
                    }, 1000);
                    break;
                default:
                    break;
            }
        }

    }

    return (
        <div className='container'>
            <div className={content === 0 ? 'content0 beBig' : 'content0 content'} onClick={handleContent(0)}>
                <img src={JHFY} alt="" />
            </div>
            <div className={content === 1 ? 'content1 beBig' : 'content1 content'} onClick={handleContent(1)} >
                <img src={MXMJ} alt="" />
            </div>
            <div className={content === 2 ? 'content2 beBig' : 'content2 content'} onClick={handleContent(2)}>
                <img src={MXBD} alt="" />
            </div>
            <div className={content === 3 ? 'content3 beBig' : 'content3 content'} onClick={handleContent(3)}>
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
