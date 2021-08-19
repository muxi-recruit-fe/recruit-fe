import React from 'react'
import BackButton from '../../components/BackButton'
import './index.css'

export default function Notice() {
    return (
        <div className='notice-bc'>
            <BackButton />
            <div className='notice-cover'>
                <div className="notice">
                    <div className="text-lyl">
                        <br /> <br /> <br /> <br />
                        欢迎匣客来到木犀客栈！
                        <br /> <br />
                        外边江湖险恶
                        <br /> <br />
                        木犀客栈显赫
                        <br /> <br />
                        镇压妖魔鬼怪
                        <br /> <br />
                        唯有木犀流派
                        <br /> <br />
                        客官您里边请~
                    </div>
                </div>
            </div>
        </div>

    )
}
