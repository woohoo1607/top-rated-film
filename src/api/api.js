import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});

const APIKey = "780eab752dc5965944a9a55c62d383ab";

export const filmsAPI = {

    getFilm(id) {
        return instance(`movie/${id}?api_key=${APIKey}`).then(response => {
           return response.data; 
        });
    },

    getFilms(currentPage = 1) {
        return instance.get(`discover/movie?api_key=${APIKey}&sort_by=vote_average.desc&page=${currentPage}`).then(response => {
            return response.data;
        });
    },

    searchFilms(data) {
        if (!data) {
            return this.getFilms().then(response => {
                return response;
            });
        } else {
            let query = data.replace(/ /g, "+");
            return instance.get(`search/movie?api_key=${APIKey}&query=${query}`).then(response => {
                console.log(response.data);
                return response.data;
            });
        }
    }
};
