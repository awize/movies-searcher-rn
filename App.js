import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import FlatList from './src/screens/FlatList'
import MoviesList from './src/screens/MoviesList'
import MovieDetails from './src/screens/MovieDetails'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: FlatList,
    Movies: MoviesList,
    MovieDetails: MovieDetails
  },
  {
    initialRouteName: 'Movies',
    defaultNavigationOptions: {
      title: 'Movies Searcher'
    }
  }
)

export default createAppContainer(navigator)
