import * as constants from '../constants';

const initialState = {
    newTasksList: {
        taskzero: {
            description: "test initil state",
            status: "fa fa-thermometer-full",
            title: 'teeeeest'
        }
    }
}

export function eventsReducer(state = initialState, action) {
    switch(action.type) {
        case constants.EVENTS_CLEAR:
            return { ...state, events: [] };
        default:
            return state;
    }
}