import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
  const friends = [
    { name: 'Juan Num 1', age: '21' /*key: '1'*/ },
    { name: 'Juan Num 2', age: '22' /*key: '2'*/ },
    { name: 'Juan Num 3', age: '23' /*key: '3'*/ },
    { name: 'Juan Num 4', age: '24' /*key: '4'*/ },
    { name: 'Juan Num 5', age: '25' /*key: '5'*/ },
    { name: 'Juan Num 6', age: '26' /*key: '6'*/ },
    { name: 'Juan Num 7', age: '27' /*key: '7'*/ },
    { name: 'Juan Num 8', age: '28' /*key: '8'*/ },
    { name: 'Juan Num 9', age: '29' /*key: '9'*/ }
  ]
  return (
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => {
        return friend.name
      }}
      data={friends}
      renderItem={({ item: { name, age } }) => {
        // element === { item: {name: 'Juan' }, index: 0 }
        return (
          <Text style={style.textStyle}>
            {name} - Age {age}
          </Text>
        )
      }}
    />
  )
}
const style = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
})

export default ListScreen
