import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import FilmsListContainer from './components/FilmsList/FilmsListContainer';
import AboutFilmContainer from './components/AboutFilm/AboutFilmContainer';

function App() {
     return (
                <div className="App">
                    <Route exact path='/' render = { () => <FilmsListContainer /> } />
                    <Route path='/film/:id' render = { () => <AboutFilmContainer /> } />
                </div>

            );
}

export default App;