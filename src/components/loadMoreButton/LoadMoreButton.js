import React from 'react';
import { connect } from "react-redux";

import './LoadMoreButton.css';

function LoadMoreButton(props) {

    return <React.Fragment>
        {
            props.characters.length > 0 && !props.lastPage && (<div className="LoadMoreButtons">
                <button className="btn btn-primary m-4"
                    onClick={() => props.onClickHandler()}>
                    Load more
                </button>
            </div>)
        }
    </React.Fragment>

}

const mapStateToProps = state => {
    return { characters: state.characters, lastPage: state.lastPage }
}


export default connect(mapStateToProps, null)(LoadMoreButton);
