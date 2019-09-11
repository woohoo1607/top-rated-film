import React from 'react';
import FilmsList from './FilmsList';
import {getFilms, searchFilms, setCurrentPage} from "../../reducers/filmsReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class FilmsListContainer extends React.Component {

    
    componentDidUpdate (prevProps, prevState) {
        if (prevProps.match.params.page !== this.props.match.params.page) {
            this.props.getFilms(this.props.match.params.page);
            window.scrollTo(0,0);
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
        let searching = false;
        if (this.props.match.path === "/search/:req") {
            if (this.props.match.params.req !== "undefined") {
                searching = true;
            } else {
                searching = false;
            }
        }
        
        return (<>
                {searching && 
                        <FilmsList films={this.props.films}
                           getFilms={this.props.getFilms}
                           searchFilms={this.props.searchFilms} 
                           history={this.props.history} 
                           searchReq={this.props.match.params.req}/> }
                           
                {!searching &&
                        <FilmsList films={this.props.films}
                           getFilms={this.props.getFilms}
                           searchFilms={this.props.searchFilms} 
                           history={this.props.history} />}
                </>
                )
    }
}

let mapStateToProps = (state) => {
    return {
        films: state.films
    };
};



export default connect(mapStateToProps, {getFilms, searchFilms, setCurrentPage})(withRouter(FilmsListContainer));
