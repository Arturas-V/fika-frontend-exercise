import React from 'react';
import { FlatList } from 'react-native';
import Movie from './Movie';
import styles from '../../../Styles/Movies/List';

const MoviesList = (data) => {

    const renderMovie = ({ item, index }) => (
        <Movie data={{
            movie: item,
            genres: data.list.genres,
            index: index
        }} />
    );

    return (
        <FlatList
            style={styles.container}
            data={data.list.movies}
            renderItem={renderMovie}
            keyExtractor={item => item.id}
        />
    );

}

export default MoviesList;