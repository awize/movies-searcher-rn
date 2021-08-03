import React from 'react'
import { Button, Text, StyleSheet, View, TouchableOpacity } from 'react-native'

const HomeScreen = (props) => {
  console.log(props)
  return (
    <View>
      <Text style={styles.text}>
        What up! I would likds s af dsa fsde to create a movie searcher app
      </Text>
      <Button
        onPress={() => {
          console.log('hi hi hi')
        }}
        title="Click on me"
      />
      <TouchableOpacity
        onPress={() => {
          console.log('Touchable pressed')
          // props.navigation.push('List')
          props.navigation.navigate('List')
        }}
      >
        <Text>GoToListDemo</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>GoToListDemo</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
})

export default HomeScreen
