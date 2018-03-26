import * as constants from '../constants';

export function eventsReducer(state, action) {
    switch(action.type) {
        case constants.EVENTS_CLEAR:
            return { ...state, events: [] };
        default:
            return state;
    }
}