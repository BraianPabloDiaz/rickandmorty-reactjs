import React from 'react';

import Navbar from '../../components/navbar/Navbar';
import NotFoundImage from '../../images/Rick_and_Morty_Notfound.png';

import './NotFound.css'

export default function NotFound() {
    return (
        <div>
            <Navbar />
            <div className="NotFound">
                <span className="NotFound__title">404</span>
                <span className="NotFound__title">Page not found</span>
                <img className="NotFound__logo" src={NotFoundImage} alt="not found" />
            </div>
        </div>
    )
}
