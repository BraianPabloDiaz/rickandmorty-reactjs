import React from "react";
import { connect } from 'react-redux';
import { setState, setCharacters, setCharacterSelected, searchCharacters, searchCharacterSelected } from '../../actions';

import Navbar from "../../components/navbar/Navbar";
import CharacterInfoModal from "../../components/characterInfoModal/CharacterInfoModal";
import Loader from '../../components/loader/Loader';
import CharacterList from '../../components/characterList/CharacterList';
import LoadMoreButton from '../../components/loadMoreButton/LoadMoreButton';

import { providerSearchPage, providerSearchCharacterInfo } from '../../providers/CharacterProvider';

import "./List.css";

class List extends React.Component {

    componentDidMount() {
        this.fectchCharacters();
    }

    fectchCharacters = async () => {
        this.props.searchCharacters();

        providerSearchPage(this.props.nextPage)
            .then(data => {
                this.props.setCharacters(data);
            })
            .catch(err => {
                this.props.setState({ loading: false, error: err });
            });
    };


    // Run when component is removed
    componentWillMount() { }
    // Run when status or props change
    // The versions prior to the change are passed by parameters
    componentDidUpdate(prevProps, prevState) { }

    //Load character data
    openCharacterInfo = character => {
        this.props.searchCharacterSelected();

        providerSearchCharacterInfo(character.id)
            .then(data => {
                this.props.setCharacterSelected({
                    characterSelected: data,
                    isOpen: true
                });
            })
            .catch(err => {
                this.props.setState({ loading: false, error: err })
            });
    }

    render() {
        return (<React.Fragment>
            <div>
                <Navbar />
                <CharacterList onClickHandler={this.openCharacterInfo} />
                <CharacterInfoModal />
                <LoadMoreButton onClickHandler={this.fectchCharacters} />
                {this.props.loading && <Loader />}
                {this.props.lastPage && <h1 className="List__end">END</h1>}
            </div>
        </React.Fragment>);
    }
}


const mapDispatchToProps = {
    setState,
    searchCharacters,
    setCharacters,
    searchCharacterSelected,
    setCharacterSelected
}

const mapStateToProps = state => {
    return { nextPage: state.nextPage, loading: state.loading, error: state.error, lastPage: state.lastPage }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
