import {filmsAPI} from "../api/api";

const SET_FILM = "SET_FILM";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";


let initialState = {
    filmData: {},
    isFetching: false
};

const filmPageReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case SET_FILM:
        {
            return {
                ...state,
                filmData: {...action.filmData}
            };
        }
        case TOGGLE_IS_FETCHING:
        {
            return {
                ...state, isFetching: action.isFetching
            };
        }
        default:
            return state;
}
};

export const setFilm = (film) =>
    ({type: SET_FILM, filmData: film});

export const toggleIsFetching = (isFetching) =>
    ({type: TOGGLE_IS_FETCHING, isFetching});

export const getFilm = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        filmsAPI.getFilm(id).then(response => {
            dispatch(toggleIsFetching(false));
            dispatch(setFilm(response));
            });  
    };
};

export default filmPageReducer;