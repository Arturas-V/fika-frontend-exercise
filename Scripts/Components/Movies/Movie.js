import React from 'react';
import { Text, View, Image } from 'react-native';
import Constants from '../../Utilities/Constants';
import styles from '../../../Styles/Movies/Movie';

const Movie = (props) => {

    const movie = props.data.movie;
    const genres = props.data.genres;

    const getGenres = () => {
        let genresStr = "";

        movie.genre_ids.forEach((genre, index) => {
            genresStr += genres[genre];
            genresStr += index === movie.genre_ids.length - 1 ? "" : ", ";
        });

        return genresStr;
    }

    return (
        <View style={[
            { backgroundColor: props.data.index % 2 === 0 ? '#eeeeee' : '#ffffff' },
            styles.container
        ]}>
            <Text style={styles.title}>Title: {movie.title}</Text>
            <View style={styles.section}>
                <View style={styles.block}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: Constants.PATH.MovieIMG + movie.poster_path
                        }}
                    ></Image>
                </View>
                <View style={styles.block}>
                    <Text
                        style={styles.meta, styles.description}
                        numberOfLines={7}
                        ellipsizeMode='end'
                    >{movie.overview}</Text>
                    <Text style={styles.meta}>Vote: {movie.vote_average}</Text>
                    <Text style={styles.meta}>Vote count: {movie.vote_count}</Text>
                    <Text style={styles.meta}>Popularity: {movie.popularity}</Text>
                    <Text style={styles.meta}>Genre: {getGenres()}</Text>

                </View>
            </View>
        </View >
    );
}

export default Movie;