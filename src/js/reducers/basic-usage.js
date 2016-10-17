import { combineReducers } from 'redux';

const inputValueReducer = (state = '', action) => {
    switch (action.type) {
        case 'INPUT_CLEARED':
            return '';
        case 'INPUT_CHANGED':
            return action.payload;
    }
    return state;
}

const allReducers = combineReducers({
    inputValue: inputValueReducer,
});

export default allReducers
