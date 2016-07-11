import fetch from 'fetch';

import ACTIONS from './actionsTypes';

export function searchHero(name) {
    return {
        type: ACTIONS.SEARCH_HERO,
        name: name
    }
}

export function fetchHeroes(name) {
    return dispatch => {
        dispatch(requestPosts(subreddit))
        return fetch(`http://www.reddit.com/r/${subreddit}.json`)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(subreddit, json)))
    }
}
