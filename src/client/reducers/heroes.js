import ACTIONS from '../actions/actionsTypes';


function posts(state = {
    isFetching: false,
    items: []
}, action) {
    switch (action.type) {
        case ACTIONS.SEARCH_HERO:
            return Object.assign({}, state, {
                isFetching: true
            })
        default:
            return state
    }
}

const Heroes = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.SEARCH_HERO:
            return [
                ...state,
                todo(undefined, action)
            ]
        default:
            return state
    }
}

export default Heroes;
