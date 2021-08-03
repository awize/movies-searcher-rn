import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

const Chip = ({ item, action }) => {
  const { label } = item
  return (
    <TouchableOpacity
      onPress={() => {
        if (action) action(item)
      }}
    >
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Chip

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#fff',
    minHeight: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginRight: 4,
    marginLeft: 4
  },
  label: {
    fontSize: 20,
    color: '#fff'
  }
})
