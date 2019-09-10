import React from 'react';
import FilmCard from './FilmCard/FilmCard';
import Search from './Search';
import {NavLink} from "react-router-dom"; 
import styles from './FilmList.module.css';
import Preloader from "../Preloader";

class FilmsList extends React.Component {

componentDidUpdate(prevProps, prevState) {
    if (prevProps.films.currentPage !== this.props.films.currentPage) {
            window.scrollTo(0,0);
        }
}

render() {
        let pages = [];
        if (this.props.films.currentPage - 3 <= 0) {
            if (this.props.films.currentPage + 3 < this.props.films.totalPages) {
                for (let i = 1; i < this.props.films.currentPage + 3; i++) {
                    pages.push(i);
                };
                pages.push("...", this.props.films.totalPages);
            } else {
                for (let i = 1; i < this.props.films.totalPages; i++) {
                    pages.push(i);
                };
            }
        } else if (this.props.films.currentPage - 3 > 0) {
            pages.push(1, "...");
            if (this.props.films.currentPage + 2 >= this.props.films.totalPages) {
                for (let i = this.props.films.totalPages-2; i<=this.props.films.totalPages; i++){
                    pages.push(i);
                };
            } else {
                for (let i = this.props.films.currentPage - 1; i < this.props.films.currentPage + 2; i++) {
                    pages.push(i);
                };
                pages.push("...", this.props.films.totalPages);
            }
        } else {
            for (let i = 1; i < this.props.films.currentPage + 5; i++) {
                    pages.push(i);
                };
                pages.push("...", this.props.films.totalPages);
        }
        
        

    return (
            <div className={styles.center}>
    
            <div className={styles.search}><Search searchFilms={this.props.searchFilms}/></div>
                
                {this.props.films.isFetching && <Preloader />}
                <div className={styles.container}>
                
        {this.props.films.filmsData.map(film => <div key={film.id} className={styles.beforeContainer} ><NavLink to={`/film/${film.id}`} ><FilmCard key={film.id} title={film.title}
            rating={film.vote_average} poster={film.poster_path}/></NavLink></div>)}
                
                </div>
                <div className={styles.pages}>
                    {pages.map( (p, index) => {
                        return <NavLink to={`/page/${p}`} key={index} className={""+(p==="..." && styles.disable)}>
                        <span className={(this.props.films.currentPage === p) ? styles.current : null}>{p}</span></NavLink>
                                        
                    })}
                </div>
            </div>
                );

};
};

export default FilmsList;
