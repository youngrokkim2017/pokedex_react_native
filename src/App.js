import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
// import Pokemon from "./models/pokemon";
import { Router, Switch, Route } from './routing';
import Pokemon from './routes/pokemon_index';
import Home from './routes/home';

// export default function App() {
export default class HybridApp extends React.Component{
  state = {
    selectedPokemon: null
  };

  // this function will take a pokemon as a paramater and set that pokemon to the state
  selectPokemon = (selectedPokemon) => {
    this.setState({
      selectedPokemon
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        {/* FlatList is the conventional way to render lists in react native */}
        {/* <FlatList
          // data: which data do you want to render
          data={Pokemon}
          // keyExtracter: the function its going to run on each item to get a unique key (not necessary if they already have a key property)
          keyExtractor={Pokemon => Pokemon.number}
          // renderItem: tell the flatlist how to render each item
          renderItem={({ item }) => <Text>{item.name}</Text>}
        /> */}

        <Router>
          <Switch>
            <Route exact path="/" render={props => <Home {...props} selectPokemon={this.selectPokemon} />} />
            <Route 
              path="/pokemon" 
              render={props => 
                <Pokemon 
                  {...props} 
                  selectedPokemon={this.state.selectedPokemon}
                />
              } 
            />
          </Switch>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    padding: 50
  },
});
