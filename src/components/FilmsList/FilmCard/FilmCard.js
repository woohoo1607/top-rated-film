import React from 'react';
import styles from './FilmCard.module.css';
import star from '../../../img/starIcon.png'

const baseImageURL = "https://image.tmdb.org/t/p/w500/";

const CardInfo = (props) => {
    return (
            <div className={styles.movie}>
                <div className={styles.imgMovie}>
                    {props.poster && <img src = {baseImageURL + props.poster} />}
                    {!props.poster && <img src = "https://kinoframe.net/films/noposter.jpg" />}
                </div>
                <div className={styles.about}>
                    <h2 className={styles.title}>{props.title}</h2>
                    <p className={styles.rating}><img src={star}/>{props.rating}</p>
                </div>
            </div>

            )
}

export default CardInfo;
