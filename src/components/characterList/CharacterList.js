import React from 'react';
import { connect } from "react-redux";

import Character from '../character/Character';

const CharacterList = (props) => {

    return (<React.Fragment>
        <div className="List"> {
            props.characters.map((character) => {
                return <Character character={character}
                    key={
                        character.id
                    }
                    onClickHandler={
                        props.onClickHandler
                    } />;
            })
        } </div>
    </React.Fragment>);
}

const mapStateToProps = state => {
    return { characters: state.characters }
}

export default connect(mapStateToProps, null)(CharacterList);
