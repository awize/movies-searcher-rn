import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { getDetail } from '../api/movies'
import { config } from '../utils/constants'
import Chip from '../components/Chip'
import ListBulletedItem from '../components/ListBulletedItem'

const MovieDetails = ({ route = {}, navigation }) => {
  const [details, setDetails] = useState({})

  const downloadDetails = async () => {
    const movieId = navigation.getParam('movieId')
    const movieDetail = await getDetail(movieId)
    setDetails(movieDetail)
  }

  useEffect(() => {
    downloadDetails()
  }, [])
  const { IMAGE_BASE_URL } = config
  const {
    poster_path: posterPath,
    genres = [],
    original_title: title,
    original_language: originalLanguage,
    overview,
    release_date: releaseDate,
    revenue,
    spoken_languages: spokenLanguages = [],
    vote_average: voteAverage,
    vote_count: voteCount,
    budget
  } = details
  return (
    <View>
      <View style={styles.posterView}>
        <View style={styles.movieScoreView}>
          <Text style={styles.movieScore}>{voteAverage}</Text>
          <Text style={styles.movieScoreTotal}>/10</Text>
        </View>
        <Image
          style={styles.moviePoster}
          resizeMode="cover"
          source={{ uri: `${IMAGE_BASE_URL}${posterPath}` }}
        />
      </View>

      <Text style={styles.movieTitle}>{title}</Text>
      <ScrollView contentContainerStyle={styles.genresView}>
        {genres.map((genre) => {
          const item = {
            ...genre,
            label: genre.name
          }
          return <Chip item={item} />
        })}
      </ScrollView>
      <View style={styles.infoContainer}>
        <Text style={styles.infoItemTitle}>OverView:</Text>
        <Text>{overview}</Text>
        <View style={styles.divider}></View>
        <Text style={styles.infoItemTitle}>Specific details:</Text>
        <ListBulletedItem label="Original Language:" value={originalLanguage} />
        <ListBulletedItem label="Release date:" value={releaseDate} />
        <ListBulletedItem label="Revenue:" value={revenue} />
        <ListBulletedItem label="Budget:" value={budget} />
      </View>
    </View>
  )
}

export default MovieDetails

const styles = StyleSheet.create({
  posterView: {
    position: 'relative',
    height: 150,
    right: 0,
    left: 0,
    top: 0,
    backgroundColor: '#cccccc'
  },
  movieScoreView: {
    backgroundColor: '#030303',
    width: 80,
    height: 50,
    borderRadius: 10,
    position: 'absolute',
    right: 30,
    top: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  movieScore: {
    fontSize: 22,
    color: '#ffffff',
    fontWeight: '600'
  },
  movieScoreTotal: {
    marginTop: 5,
    marginLeft: 3,
    fontSize: 14,
    color: '#ffffff'
  },
  moviePoster: {
    borderRadius: 5,
    height: 180,
    width: 130,
    position: 'absolute',
    left: 30,
    top: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65
  },
  movieTitle: {
    marginTop: 10,
    marginLeft: 200,
    fontSize: 30,
    marginBottom: 50
  },
  genresView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    left: 0,
    backgroundColor: '#2c2c2c',
    padding: 10
  },
  infoContainer: {
    fontSize: 20,
    padding: 30
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
    margin: 5,
    marginBottom: 10,
    marginTop: 10
  },
  infoItemTitle: { marginBottom: 10, fontSize: 20 },
  movieDescription: {}
})
