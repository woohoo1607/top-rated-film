import React from 'react';
import FilmsList from './FilmsList';
import {getFilms, searchFilms, setCurrentPage} from "../../reducers/filmsReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
//import Preloader from "../Preloader";

class FilmsListContainer extends React.Component {

    
    componentDidUpdate (prevProps, prevState) {
        if (prevProps.match.params.page !== this.props.match.params.page) {
            this.props.getFilms(this.props.match.params.page);
        }
        
    }
    
    componentDidMount() {
        if (this.props.match.params.page) {
            this.props.getFilms(this.props.match.params.page);
        } else {
            this.props.getFilms();
        }

    }   


    render() {
        return (

                <FilmsList films={this.props.films}
                           getFilms={this.props.getFilms}
                           searchFilms={this.props.searchFilms} />
                

                )
    }
}

let mapStateToProps = (state) => {
    return {
        films: state.films
    };
};



export default connect(mapStateToProps, {getFilms, searchFilms, setCurrentPage})(withRouter(FilmsListContainer));
