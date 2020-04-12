import * as ACTION_TYPES from '../actions/action_types';

const initialState = {
    userText: ""
}

const Reducer2 = (state = initialState, action) => {

    switch (action.type) {
        case ACTION_TYPES.USER_TEXT:
            return {
                ...state,
                userText: action.payLoad
            }
        default: return state;
    }
}

export default Reducer2;