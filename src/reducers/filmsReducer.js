import {filmsAPI} from "../api/api";

const SET_FILMS = "SET_FILMS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_PAGES = "SET_TOTAL_PAGES";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";


let initialState = {
    filmsData: [],
    currentPage: 1,
    totalPages: 0,
    isFetching: false
};

const filmsReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case SET_FILMS:
        {
            return {
                ...state,
                filmsData: [...action.filmsData]
            };
        }
        case SET_CURRENT_PAGE:
        {
            return {
                ...state,
                currentPage: action.currentPage
            };
        }
        case SET_TOTAL_PAGES:
        {
            return {
                ...state,
                totalPages: action.totalPages
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

export const setFilms = (films) =>
    ({type: SET_FILMS, filmsData: films});

export const setCurrentPage = (currentPage) =>
    ({type: SET_CURRENT_PAGE, currentPage: currentPage});

export const setTotalPages = (totalPages) =>
    ({type: SET_TOTAL_PAGES, totalPages: totalPages});
    
export const toggleIsFetching = (isFetching) =>
    ({type: TOGGLE_IS_FETCHING, isFetching});

export const getFilms = (currentPage) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        filmsAPI.getFilms(currentPage).then(response => {
            dispatch(toggleIsFetching(false));
            dispatch(setFilms(response.results));
            dispatch(setCurrentPage(response.page));
            dispatch(setTotalPages(response.total_pages));
        });  
    };
};

export const searchFilms = (data) => {
    return (dispatch) => {
        filmsAPI.searchFilms(data).then(response => {
            if (response.results) {
                dispatch(setFilms(response.results));
                dispatch(setCurrentPage(response.page));
                dispatch(setTotalPages(response.total_pages));
            };
        });
    };
};

export default filmsReducer;