import React from 'react';
import {reduxForm, Field} from "redux-form";
import {Input} from "../FormsControls/FormsControls";


const SearchForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit} >
                <div>
                    <Field name="search" component={Input} placeholder="Search" onChange={props.editInput}/>
                </div>
                                               
            </form>

            );
};


const SearchReduxForm = reduxForm({form: 'searchForm'})(SearchForm);

const Search = (props) => {

    const onSubmit = (formData) => {
        
    };
    const sendSearch = (data) => {
        props.searchFilms(data);
    };
    let timer = null;
    const editInput = (e) => {
        let data = e.nativeEvent.data;
        if (timer){
            clearTimeout(timer);
        }
        timer = setTimeout(() => sendSearch(data), 1000);



    };

    return (
            <div>
                <SearchReduxForm onSubmit={onSubmit} editInput={editInput}/>
            </div>
            );
};

export default Search;