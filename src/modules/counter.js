import {push} from 'react-router-redux';
import {ABOUT_PATH} from '../containers/app/index'

export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED';
export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED';
export const DECREMENT = 'counter/DECREMENT';
export const ABOUT = 'counter/ABOUT';
export const RESET = 'counter/RESET';

const
    options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'America/New_York'
    },
    initialState = {
        count: 0,
        isIncrementing: false,
        isDecrementing: false,
        isResetting: false,
        clickHistory: []
    },
    addClickHistory = (state, name) => state.clickHistory.concat({
        dateTime: new Date().toLocaleTimeString('en-US', options),
        name: name
    });

export const boundIncrement = () => dispatch => {
    dispatch({
        type: INCREMENT_REQUESTED
    });

    dispatch({
        type: INCREMENT,
        name: 'Increment'
    });
};

export const boundIncrementAsync = () => dispatch => {
    dispatch({
        type: INCREMENT_REQUESTED
    });

    return setTimeout(() => dispatch({
        type: INCREMENT,
        name: 'Increment Async'
    }), 2000);
};

export const boundDecrement = () => dispatch => {
    dispatch({
        type: DECREMENT_REQUESTED
    });

    dispatch({
        type: DECREMENT,
        name: 'Decrement'
    });
};

export const boundDecrementAsync = () => dispatch => {
    dispatch({
        type: DECREMENT_REQUESTED
    });

    return setTimeout(() => dispatch({
        type: DECREMENT,
        name: 'Decrement Async'
    }), 2000);
};

export const boundAbout = () => dispatch => {
    dispatch({
        type: ABOUT,
        name: 'Go to about page via redux'
    });

    dispatch(push(ABOUT_PATH));
};

export const boundReset = () => dispatch => {
    dispatch({
        type: RESET,
        name: 'Reset'
    });
};

export default (state = initialState, action) => {

    switch (action.type) {
        case INCREMENT_REQUESTED:
            return {
                ...state,
                isIncrementing: true
            };

        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
                isIncrementing: !state.isIncrementing,
                clickHistory: addClickHistory(state, action.name)
            };

        case DECREMENT_REQUESTED:
            return {
                ...state,
                isDecrementing: true
            };

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
                isDecrementing: !state.isDecrementing,
                clickHistory: addClickHistory(state, action.name)
            };

        case ABOUT:
            return {
                ...state,
                clickHistory: addClickHistory(state, action.name)
            };

        case RESET:
            return {
                ...state,
                count: state.count = 0,
                clickHistory: addClickHistory(state, action.name)
            };

        default:
            return state
    }
};
