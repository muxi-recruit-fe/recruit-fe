import React, { Component } from 'react'
import './index.css'
import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'
import img4 from './img/4.png'
import img5 from './img/5.png'
import imgback from './img/back.svg'
import imgnext from './img/next.svg'

export default class Info extends Component{
    constructor(props){
        super(props)
        this.state={
            imgNUM: this.props.location.date,
            imgList: [img1,img2,img3,img4,img5],
            textList: ['后端组','安卓组','产品组','设计组','前端组']
        }
    }

    chageimg(){
        let tmp=this.state.imgNUM
        if(tmp === 4){
            tmp=-1
        }
        this.setState({
            imgNUM: tmp+1
        })
    }
    backMiji(){
        let { history } = this.props
        history.push({pathname: '/miji'})
    }

    render() {
        return (
            <div className='info'>
                <img src={imgback} alt='' className='backtomiji' onClick={this.backMiji.bind(this)}></img>
                <img src={this.state.imgList[this.state.imgNUM]} alt='图片加载失败' className='infoImg'></img>
                <div className='next_info'>
                    <img src={imgnext} alt='' className='nextimg' onClick={this.chageimg.bind(this)}></img>
                    <div className='nexttext'>{this.state.textList[this.state.imgNUM]}</div>
                </div>
                
            </div>
        )
    }
}