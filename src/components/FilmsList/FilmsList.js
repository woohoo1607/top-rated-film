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

addPages = (start, end, acc) => {
    if(start>=end)
        return acc;
    acc.push(start);
    return this.addPages(start+1, end, acc);
};
addPages2 = (start, end, acc) => {
    if(start>end)
        return acc;
    
    acc.push(start);
    return this.addPages2(start+1, end, acc);
};

render() {
        let pages = [];
        if (this.props.films.currentPage - 3 <= 0) {
            if (this.props.films.currentPage + 3 < this.props.films.totalPages) {
                this.addPages(1, (this.props.films.currentPage + 3), pages);
                pages.push("...", this.props.films.totalPages);
            } else {
                this.addPages(1, this.props.films.totalPages, pages);
            }
        } else if (this.props.films.currentPage - 3 > 0) {
            pages.push(1, "...");
            if (this.props.films.currentPage + 2 > this.props.films.totalPages) {
                this.addPages2((this.props.films.totalPages-2), (this.props.films.totalPages), pages);
            } else {
                this.addPages((this.props.films.currentPage - 1), (this.props.films.currentPage+2), pages);
                pages.push("...", this.props.films.totalPages);
            }
        } else {
            this.addPages(1, (this.props.films.currentPage+5), pages);
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
