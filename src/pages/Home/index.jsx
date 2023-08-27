import React, { useState } from 'react'
import JHFY from './images/jhfy.svg'
import MXMJ from './images/mxmj.svg'
import MXBD from './images/mxbd.svg'
import GG from './images/gg.svg'
import Share from './images/share.png'
import Back from './images/back.png'
import './index.css'

export default function Home(props) {

    const { history } = props
    const [content, setContent] = useState()
    const [isShare, setIsShare] = useState(false)

    const handleShare = () => {
        setIsShare(!isShare)
    }

    const handleNotice = () => {
        history.push('/notice')
    }
    const handleBack = () => {
        history.push('/guide')
    }
    const handleMiji = () => {
        history.push('/miji')
    }
    const handleProduct = () => {
        history.push('/product')
    }
    const handleHackathon = () => {
        history.push('/hackathon')
    }
    const handleContent = (id) => {
        return () => {
            switch (id) {
                case 0:
                    setContent(id)
                    setTimeout(() => {
                        handleHackathon()
                    }, 1000);
                    break;
                case 1:
                    setContent(id)
                    setTimeout(() => {
                        handleMiji()
                    }, 1000);
                    break;
                case 2:
                    setContent(id)
                    setTimeout(() => {
                        handleProduct()
                    }, 1000);
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
        <div className='container-lyl'>
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
            <div className="ewm" style={{ display: isShare ? 'block' : 'none', color: 'white' }} onClick={handleShare}>分享二维码给其他匣客！点击屏幕任意处可关闭该弹窗哦！<img src='http://muxi-fresh.muxixyz.com/muxi-jianghu.png' alt="" /></div>
            <div className="share-lyl content-lyl" onClick={handleShare}>
                <img src={Share} alt="" />
            </div>
            <div className="back-lyl content-lyl" onClick={handleBack}>
                <img src={Back} alt="" />
            </div>
        </div>
    )
}
