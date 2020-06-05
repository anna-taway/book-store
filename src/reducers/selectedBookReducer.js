import { SELECTED_BOOK } from '../actions/types';

const selectedBook = [];


export default (state = selectedBook, action) => {
    switch(action.type) {
        case SELECTED_BOOK:
            state.push(action.payload);
            return state;
        default:
            return state;
    };
};