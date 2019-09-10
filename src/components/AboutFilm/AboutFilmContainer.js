import React from 'react';
import AboutFilm from './AboutFilm';
import {getFilm, clearFilm} from "../../reducers/filmPageReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Preloader from "../Preloader";

class FilmsListContainer extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.getFilm(id);
        window.scrollTo(0,0);
    }
    
    componentWillUnmount(){
        this.props.clearFilm();
    }
    

    render() {
        return (
                <>
                {this.props.aboutFilm.isFetching && <Preloader />}
                <AboutFilm aboutFilm={this.props.aboutFilm}
                           goBack={this.props.history.goBack}
                />
                </>

                );
    }
};

let mapStateToProps = (state) => {
    return {
        aboutFilm: state.aboutFilm
    };
};



export default connect(mapStateToProps, {getFilm, clearFilm})(withRouter(FilmsListContainer));
