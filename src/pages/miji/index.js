import React, { Component } from 'react'
import imgCP from './img/cp.png'
import imgMFE from './img/qd.png'
import imgAZ from './img/az.png'
import imgHD from './img/hd.png'
import imgSJ from './img/sj.png'
import img_back from './img/UI_Back.png'
import img_text from './img/back.png'
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
            <div className='contain_miji'>
                <div className='back_miji'>
                    <img src={img_back} alt='' className='backimg1' onClick={this.Tohome.bind(this)}></img>
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