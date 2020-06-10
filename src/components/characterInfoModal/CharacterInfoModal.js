import React from 'react';
import Modal from '../modal/Modal';
import { connect } from "react-redux";
import { setCharacterSelected } from '../../actions';

import { ImgEffect } from './style';

import './CharacterInfoModal.css'

function CharacterInfoModal(props) {

    const character = props.characterPopup.characterSelected;
    const isOpen = props.characterPopup.isOpen;

    const onClose = () => {
        props.setCharacterSelected({
            characterSelected: null,
            isOpen: false
        });
    }

    if (typeof character == undefined || character == null) {
        return null;
    }

    return <Modal isOpen={isOpen} onClose={onClose}>
        <article className="CharacterInfoModal" >
            <div>
                <ImgEffect className="CharacterInfoModal__img" src={character.image} alt="profile_image" />
            </div>
            <section className="CharacterInfoModal_info_container" >
                <span className="CharacterInfoModal__name"> {character.name} </span>
                <section>
                    <span className="CharacterInfoModal__status">{character.status} - {character.species}</span >
                </section>
                <section className="CharacterInfoModal__property__wrapper" >
                    <span className="CharacterInfoModal__property"> Origin:</span>
                    <span>{character.origin?.name}</span >
                </section>
                <section className="CharacterInfoModal__property__wrapper" >
                    <span className="CharacterInfoModal__property"> Last known location:</span>
                    <span > {character.location?.name} </span>
                </section >
            </section>
        </article>
    </Modal >
}


const mapStateToProps = state => {
    return { characterPopup: state.characterPopup }
}

const mapDispatchToProps = {
    setCharacterSelected
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterInfoModal);
