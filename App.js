import { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, TouchableHighlight, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text selectable={true}>Open up App.js to start working on your app!</Text>
      <MyCounter />
      <StatusBar style="auto" />
    </View>
  );
}


class MyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  onPress = () => {
    this.setState(state => ({
      count: state.count + 1,
    }))
  }

  onPressReset = () => {
    this.setState(state => ({
      count: 0
    }))
  }

  render() {
    return (
    <View style={styles.counter}>
      <Text>MyCounter</Text>
      <TouchableOpacity style={styles.button} onPress={this.onPress}>
        <Text>Press me! (count: {this.state.count})</Text>
      </TouchableOpacity>
      <TouchableHighlight style={styles.button} onPress={this.onPressReset}>
        <Text>Reset</Text>
      </TouchableHighlight>
    </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    flex: 0.5,
  },
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: "red",
  }
});
