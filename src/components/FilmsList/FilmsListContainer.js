import React from 'react';
import FilmsList from './FilmsList';
import {getFilms, searchFilms, setCurrentPage} from "../../reducers/filmsReducer";
import {connect} from "react-redux";
//import Preloader from "../Preloader";

class FilmsListContainer extends React.Component {
    componentDidMount() {
        this.props.getFilms();
    }
    

    render() {
        return (

                <FilmsList films={this.props.films}
                           getFilms={this.props.getFilms}
                           searchFilms={this.props.searchFilms}
                />

                )
    }
}

let mapStateToProps = (state) => {
    return {
        films: state.films
    };
};



export default connect(mapStateToProps, {getFilms, searchFilms, setCurrentPage})(FilmsListContainer);
