import * as constants from '../constants';

const initialState = {

}

export function eventsReducer(state = initialState, action) {
    switch(action.type) {
        case constants.TEST_EVENT:
            return { ...state, events: [] };
        default:
            return state;
    }
}