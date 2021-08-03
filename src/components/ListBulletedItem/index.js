import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ListBulletedItem = ({ label, value }) => {
  return (
    <View style={styles.container}>
      <View style={styles.bullet}></View>
      <Text>{label}</Text>
      <Text style={{ marginLeft: 4, fontWeight: '600' }}>{value}</Text>
    </View>
  )
}

export default ListBulletedItem

const styles = StyleSheet.create({
  container: {
    marginTop: 3,
    marginBottom: 3,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  bullet: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    marginRight: 5,
    borderRadius: 5
  }
})
