import axiosInstanceService from "./axiosInstance.service";
import {urls} from "../constants";

const movieService = {
    getAll:(page) => axiosInstanceService.get(urls.movies + '?page='+ page),
    getOne:(id) => axiosInstanceService.get(urls.movie + id),
    getAllGenres:() => axiosInstanceService.get(urls.genres),
    getByGenres:(page, id) => axiosInstanceService.get(urls.movies + '?page='+ page + '&with_genres=' + id),
    searchMovie:(name) => axiosInstanceService.get(urls.search + '?query=' + name)
}

export {
    movieService
}