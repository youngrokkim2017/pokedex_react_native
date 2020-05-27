import React from "react";
import { View, Text, Image } from "react-native";
// import pokemon from "../models/pokemon";
  // don't need above code because we will be getting the pokemon from the selected pokemon
import { Link } from '../routing';

const Pokemon = (props) => {
  // const examplePokemon = pokemon[0];

  const { selectedPokemon } = props;

  const backButton = (
    <View>
      <Link to="/">
        <Text>Go Back</Text>
      </Link>
    </View>
  )

  // need a render for if there is NO pokemon selected
  if (!selectedPokemon) {
    return (
      <View>
        {backButton}
        <Text>No Pokemon Selected</Text>
      </View>
    )
  }
  return (
    <View>
      {backButton}
      <View>
        <View>
          <Text>{`#${selectedPokemon.number}`}</Text>
        </View>
        <View>
          <Text>{`Name: ${selectedPokemon.name}`}</Text>
        </View>
        <View>
          <Text>{`Type: ${selectedPokemon.type}`}</Text>
        </View>
        <View>
          <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: selectedPokemon.photoUrl }}
          />
        </View>
      </View>
    </View>
  );
};
export default Pokemon;
