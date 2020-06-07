import React from "react";
import Skeleton from 'react-loading-skeleton';

import "./Character.css";

export default class Character extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
    }

    handleImageLoaded() {
        this.setState({ loaded: true });
    }

    render() {
        const character = this.props.character;
        const loaded = this.state.loaded;

        return (<div className="Character"
            onClick={
                () => {
                    this.props.onClickHandler(character)
                }
            }>
            {!loaded && <Skeleton height={200} />}
            <img className="Character__img" alt="profile_img"
                src={character.image} onLoad={this.handleImageLoaded.bind(this)} />
            <label className="Character__label"> {
                character.name || <Skeleton />
            }</label>
        </div >);
    }

}
