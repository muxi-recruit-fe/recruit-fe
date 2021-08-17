import React, { Component } from 'react'
import imgCP from './img/changpin.svg'
import imgMFE from './img/mfe.svg'
import imgAZ from './img/anzhou.svg'
import imgHD from './img/bfe.svg'
import imgSJ from './img/sheji.svg'
import img_back from './img/UI_Back.svg'
import img_text from './img/img_back_text.svg'
import './index.css'

export default class Miji extends Component{
    constructor(props){
        super(props)
        this.state={
            num: 1
        }
    }

    Tohome(){
        let { history } = this.props
            history.push({
            pathname: '/home',
        })
    }
    Toinfo(){
        let { history } = this.props
            history.push({
            pathname: '/info',
            date:this.state.num
        })
    }
    chage0(){
        this.setState({
            num: 0
        })        
    }
    chage1(){
        this.setState({
            num:1
        })
    }
    chage2(){
        this.setState({
            num:2
        })
    }
    chage3(){
        this.setState({
            num:3
        })
    }
    chage4(){
        this.setState({
            num:4
        })
    }
    

    render(){
        return (
            <div className='contain'>
                <div className='back'>
                    <img src={img_back} alt='' className='backimg' onClick={this.Tohome.bind(this)}></img>
                    <img src={img_text} alt='' className='backimg' onClick={this.Tohome.bind(this)}></img>
                </div>
                <div className='zubie'>
                    <img src={imgMFE} alt='' className='img_mfe' onTouchStart={this.chage0.bind(this)} onTouchEnd={this.Toinfo.bind(this)}></img>
                    <img src={imgAZ} alt='' className='img_AZ' onTouchStart={this.chage2.bind(this)} onTouchEnd={this.Toinfo.bind(this)}></img>
                    <img src={imgHD} alt='' className='img_HD' onTouchStart={this.chage1.bind(this)} onTouchEnd={this.Toinfo.bind(this)}></img>
                    <img src={imgSJ} alt='' className='img_SJ' onTouchStart={this.chage4.bind(this)} onTouchEnd={this.Toinfo.bind(this)}></img>
                    <img src={imgCP} alt='' className='img_CP' onTouchStart={this.chage3.bind(this)} onTouchEnd={this.Toinfo.bind(this)}></img>
                </div>
            </div>
        )
    }
}