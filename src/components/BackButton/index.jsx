import React from 'react'
import { withRouter } from "react-router-dom";
import Back from './backbutton.svg'
import './index.css'

function BackButton(props) {

    const handleGoBack = () => {
        props.history.go(-1)

    }

    return (
        <div>
            <div className="back-comp" onClick={handleGoBack}>
                <img src={Back} alt=''></img>
                <h3>返回</h3>
            </div>
        </div>
    )
}

export default withRouter(BackButton)
