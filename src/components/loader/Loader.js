import React from 'react';
import './Loader.css';

export default function Loader(props){

    return <div className="Loader">

        <div className="windows8">
            <div className="wBall" id="wBall_1">
                <div className="wInnerBall"></div>
            </div>
            <div className="wBall" id="wBall_2">
                <div className="wInnerBall"></div>
            </div>
            <div className="wBall" id="wBall_3">
                <div className="wInnerBall"></div>
            </div>
            <div className="wBall" id="wBall_4">
                <div className="wInnerBall"></div>
            </div>
            <div className="wBall" id="wBall_5">
                <div className="wInnerBall"></div>
            </div>
        </div>
    </div>
}