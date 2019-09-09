import React from 'react';
import AboutFilm from './AboutFilm';
import {getFilm} from "../../reducers/filmPageReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
//import Preloader from "../Preloader";

class FilmsListContainer extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.getFilm(id);
    }
    

    render() {
        return (

                <AboutFilm aboutFilm={this.props.aboutFilm}

                />

                );
    }
};

let mapStateToProps = (state) => {
    return {
        aboutFilm: state.aboutFilm
    };
};



export default connect(mapStateToProps, {getFilm})(withRouter(FilmsListContainer));
