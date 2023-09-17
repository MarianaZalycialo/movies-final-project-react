import axios from 'axios';

const axiosInstanceService = axios.create({
    baseURL: 'https://api.themoviedb.org/'
});

axiosInstanceService.interceptors.request.use(config => {
    const access = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzcwMjkwMjZhNTczY2UzZGEzYzA3MGFhYzExY2YwZSIsInN1YiI6IjY0NjY2MWY0YzM1MTRjMDE3NDVhYjgzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1NFLaiJC-sMuwtsgg5aqncAverMMX_DV7tyDQNt43kI';

    if (access) {
        config.headers.Authorization = `Bearer ${access}`;
    }

    return config;
});

export default axiosInstanceService;