import React from 'react';
//import FilmCard from './FilmCard/FilmCard';
//import Search from './Search';
import styles from './AboutFilm.module.css';
import star from '../../img/starIcon.png'

const baseImageURL = "https://image.tmdb.org/t/p/w500/";



const FilmsList = (props) => {
    console.log(props.aboutFilm.filmData);
    let data = props.aboutFilm.filmData;;
    
    let countries = [];
    if (data.production_countries) {
        data.production_countries.map(countr => countries.push(countr.name));
    };
    let country;
    (countries.length>0) ? country = countries.join(", ") : country = null;
    
    let genres = [];
    if (data.genres) {
        data.genres.map(genre => genres.push(genre.name));
    };
    let genre;
    (genres.length>0) ? genre = genres.join(", ") : genre = null    ;
    
    let releaseDay, releaseMonth, releaseYear;
    let releaseDate = [];
    if (data.release_date) {
        releaseDate = data.release_date.split("-");
        releaseDay = releaseDate[2];
        releaseMonth = releaseDate[1];
        releaseYear = releaseDate[0];
    }
    
    
    return (
            <div className={styles.center}>
    <button>Nazad</button>
                <h1>{data.title}</h1>
                <div className={styles.container}>
                <div className={styles.imgMovie}>
                    {data.poster_path && <img src = {baseImageURL + data.poster_path} />}
                    {!data.poster_path && <img src = "https://kinoframe.net/films/noposter.jpg" />}
                </div>
                <div className={styles.info}>
                        
                        {releaseYear && <div><span className={styles.titles}>Release year: </span>{releaseYear}</div>}
                        {country && <div><span className={styles.titles}>Country: </span>{country}</div>}
                        {data.original_title && <div><span className={styles.titles}>Original title: </span>{data.original_title}</div>}
                        {data.tagline && <div><span className={styles.titles}>Tagline: </span>{data.tagline}</div>}
                        {genre && <div><span className={styles.titles}>Genres: </span>{genre}</div>}
                        {data.release_date && <div><span className={styles.titles}>Release date: </span>{releaseDay + "." + releaseMonth + "." + releaseYear}</div>}
                        {data.overview && <div><span className={styles.titles}>Overview: </span>{data.overview}</div>}
                        <div><span className={styles.titles}>Raiting: </span><img src={star}/>{data.vote_average}</div>
                </div>
            
                </div>
            </div>
            );
    
};

export default FilmsList;
