import { useEffect, useState } from 'react';
import axios from 'axios';
import Constants from '../Utilities/Constants';

const useGetMoviesdata = () => {
    const [data, setData] = useState({ movies: [], genres: {} });

    useEffect(() => {
        const getData = async () => {
            let genresMap = {};

            await axios(
                Constants.API.MovieDB.Genres
            ).then(res => {
                res.data.genres.forEach((genre) => {
                    genresMap[genre.id] = genre.name;
                });
            });

            const moviesResult = await axios(
                Constants.API.MovieDB.Movies
            );

            setData({
                movies: moviesResult.data.results,
                genres: genresMap
            });
        };

        getData();
    });

    return data;
}

export default useGetMoviesdata;