const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_STATE':
            return Object.assign({}, state, action.payload);

        case 'SEARCH_CHARACTERS':
            let ns_SEARCH_CHARACTERS = Object.assign({}, state);
            ns_SEARCH_CHARACTERS.loading = true;
            ns_SEARCH_CHARACTERS.error = null;
            return ns_SEARCH_CHARACTERS;

        case 'SET_CHARACTERS':
            let ns_SET_CHARACTERS = Object.assign({}, state);
            ns_SET_CHARACTERS.loading = false;
            ns_SET_CHARACTERS.error = null;

            if (action.payload.length > 0) {
                ns_SET_CHARACTERS.characters = [].concat(...state.characters, action.payload);
                ns_SET_CHARACTERS.nextPage = state.nextPage + 1;
            } else {
                ns_SET_CHARACTERS.lastPage = true;
            }
            return ns_SET_CHARACTERS;

        case 'SEARCH_CHARACTER_SELECTED':
            let ns_SEARCH_CHARACTER_SELECTED = Object.assign({}, state);
            ns_SEARCH_CHARACTER_SELECTED.loading = true;
            ns_SEARCH_CHARACTER_SELECTED.error = null;
            return ns_SEARCH_CHARACTER_SELECTED;

        case 'SET_CHARACTER_SELECTED':
            let ns_SET_CHARACTER_SELECTED = Object.assign({}, state);
            ns_SET_CHARACTER_SELECTED.characterPopup = action.payload;
            ns_SET_CHARACTER_SELECTED.loading = false;
            ns_SET_CHARACTER_SELECTED.error = null;
            return ns_SET_CHARACTER_SELECTED;

        default:
            return state;
    }
}

export default reducer;
