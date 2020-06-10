import React, { useState } from "react";
import Skeleton from 'react-loading-skeleton';

import "./Character.css";

import { ImgEffect } from './Style';

export default function Character(props) {

    const character = props.character;
    const [loaded, setLoaded] = useState(false);

    return (<div className="Character"
        onClick={
            () => {
                props.onClickHandler(character)
            }
        }>
        {!loaded && <Skeleton height={200} />}
        <ImgEffect className="Character__img" alt="profile_img"
            src={character.image} onLoad={() => { setLoaded(true) }} />
        <label className="Character__label"> {
            character.name || <Skeleton />
        }</label>
    </div >);


}
