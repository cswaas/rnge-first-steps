import React, {PureComponent} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {GameEngine} from 'react-native-game-engine';
import {Finger} from './components/renderers';
import {MoveFinger} from './components/systems';
import Header from './components/Header';

export default class App extends PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container1}>
        <Header title="My Game" />
        <GameEngine
          style={styles.container2}
          systems={[MoveFinger]}
          entities={{
            1: {position: [40, 200], renderer: <Finger />}, //-- Notice that each entity has a unique id (required)
            2: {position: [100, 300], renderer: <Finger />}, //-- and a renderer property (optional). If no renderer
            3: {position: [160, 400], renderer: <Finger />}, //-- is supplied with the entity - it won't get displayed.
            4: {position: [220, 500], renderer: <Finger />},
            5: {position: [280, 600], renderer: <Finger />},
          }}>
          <StatusBar hidden={true} />
        </GameEngine>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: 'darkslateblue',
    paddingTop: 30,
  },
  container2: {
    flex: 1,
    backgroundColor: '#000',
  },
});
