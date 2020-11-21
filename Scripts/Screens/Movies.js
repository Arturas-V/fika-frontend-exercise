import React from 'react';
import { Text, ScrollView } from 'react-native';
import MoviesList from '../Components/Movies/List';
import styles from '../../Styles/Movies/Screen';

const Movies = (data) => {
    const moviesData = data.moviesData;

    let title = "Movies list loading...";
    let list;

    if (moviesData.movies.length > 0) {
        title = "Movies list:";
        list = <MoviesList list={moviesData} />;
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {list}
        </ScrollView>
    );

}

export default Movies;