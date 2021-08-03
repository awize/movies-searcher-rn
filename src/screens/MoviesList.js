import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import MovieCard from '../components/MovieCard'
import { getAll } from '../api/movies'

const BASE_URL = 'http://localhost:3000'

const MoviesList = ({ navigation }) => {
  const [movies, setMovies] = React.useState([])

  const getAllMovies = async () => {
    const allMovies = await getAll()
    setMovies(allMovies)
  }

  React.useEffect(() => {
    getAllMovies()
  }, [])

  const seeMovieDetails = (id) => {
    navigation.navigate('MovieDetails', {
      movieId: id
    })
  }

  return (
    <View>
      <Text style={styles.header}>All Movies</Text>
      <FlatList
        keyExtractor={(movie) => {
          return `${movie.id}`
        }}
        data={movies}
        renderItem={({
          item: {
            original_title: movieTitle,
            overview,
            poster_path: posterPath,
            id
          }
        }) => (
          <MovieCard
            id={id}
            movieTitle={movieTitle}
            overview={overview}
            posterPath={posterPath}
            seeMovieDetails={seeMovieDetails}
          />
        )}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: 'white'
  }
})

export default MoviesList
