import {applyMiddleware, combineReducers, createStore} from "redux";
import filmsReducer from "../reducers/filmsReducer"
import filmPageReducer from "../reducers/filmPageReducer"
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"

let reducers = combineReducers({
    films: filmsReducer,
    aboutFilm: filmPageReducer,
    form: formReducer

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;