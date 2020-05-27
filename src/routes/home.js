import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import pokemon from "../models/pokemon";

const Home = (props) => {
  // functional component so needs const
  const handleClick = (pokemon) => {
    props.selectPokemon(pokemon);
    props.history.push('/pokemon');
  };

  return (
    <View>
      <FlatList
        keyExtractor={(pokemon) => pokemon.number}
        data={pokemon}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleClick(item)}>
            {/* touchabout opacity takes an onPress prop that takes in a callback as an argument */}
            {/* gonna pass in the click handler */}
            <Text>{item.name}</Text> 
          </TouchableOpacity>
          )
        }
      />
    </View>
  );
};
export default Home;
