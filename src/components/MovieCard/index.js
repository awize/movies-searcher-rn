import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Card, Button, Icon } from 'react-native-elements'
import { config } from '../../utils/constants'

const MovieCard = ({
  id,
  movieTitle,
  overview,
  posterPath,
  seeMovieDetails
}) => {
  const { IMAGE_BASE_URL } = config
  return (
    <Card>
      <Card.Title>{movieTitle}</Card.Title>
      <Card.Divider />
      <View>
        <Image
          style={styles.moviePoster}
          resizeMode="cover"
          source={{ uri: `${IMAGE_BASE_URL}${posterPath}` }}
        />
        <Text style={{ marginBottom: 10 }}>{overview}</Text>
        <Button
          onPress={() => seeMovieDetails(id)}
          icon={
            <Icon name="movie" style={{ marginRight: 10 }} color="#ffffff" />
          }
          buttonStyle={styles.detailsBtn}
          title="Ver detalles"
        />
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  moviePoster: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    width: 200,
    height: 200
  },
  detailsBtn: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  }
})

export default MovieCard
