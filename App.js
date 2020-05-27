import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HybridApp from './src/App'

// export default function App() {
export default class App extends React.Component{
  render() {
    return (
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      // </View>
      <HybridApp />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
