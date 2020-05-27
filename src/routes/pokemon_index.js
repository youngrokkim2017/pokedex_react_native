import React from "react";
// Platform has the info about the platform you are currently on 
import { View, Text, Image, Platform, Button, Share } from "react-native";
// import pokemon from "../models/pokemon";
  // don't need above code because we will be getting the pokemon from the selected pokemon
import { Link } from '../routing';
// import { Platform } from "react-native";

const Pokemon = (props) => {
  // const examplePokemon = pokemon[0];

  const { selectedPokemon } = props;

  const backButton = (
    <View>
      <Link to="/">
        <Text>Go Back</Text>
      </Link>
    </View>
  );

  const handlePress = () => {
    Share.share({
      message: "Check out my favorite Pokemon!",
      url: props.selectedPokemon.photoUrl,
    })
  }

  // need a render for if there is NO pokemon selected
  if (!selectedPokemon) {
    return (
      <View>
        {backButton}
        <Text>No Pokemon Selected</Text>
      </View>
    );
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
      {/* if platform.os is NOT web, then show something */}
      {
        Platform.OS !== "web" && (
          <View>
            <Button title="Share" onPress={handlePress} />
          </View>
        )
      }
    </View>
  );
};
export default Pokemon;
