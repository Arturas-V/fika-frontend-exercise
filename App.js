import React from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';
import Movies from './Scripts/Screens/Movies';
import useGetMoviesdata from './Scripts/Hooks/useGetMoviesData';
import styles from './Styles/Main/Styles';

const App = () => {
    const getMoviesData = useGetMoviesdata();

    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content" />
            <View style={styles.container}>
                <Movies moviesData={getMoviesData} />
            </View>
        </SafeAreaView>
    );
}

export default App;