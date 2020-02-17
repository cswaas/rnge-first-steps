import React, {PureComponent} from 'react';
import {View, Dimensions, StyleSheet, StatusBar} from 'react-native';
import {GameEngine, GameLoop} from 'react-native-game-engine';
import {Finger} from './components/renderers';
import {MoveFinger} from './components/systems';
import Header from './components/Header';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');
const RADIUS = 25;

export default class App extends PureComponent {
  /* Example with GameEngine
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
*/

  /* Example with GameLoop */
  constructor() {
    super();
    this.state = {
      x: WIDTH / 2 - RADIUS,
      y: HEIGHT / 2 - RADIUS,
    };
  }

  updateHandler = ({touches, screen, layout, time}) => {
    let move = touches.find(x => x.type === 'move');
    if (move) {
      this.setState({
        x: this.state.x + move.delta.pageX,
        y: this.state.y + move.delta.pageY,
      });
    }
  };

  render() {
    return (
      <View style={styles.container1}>
        <Header title="My Game" />

        <GameLoop style={styles.container2} onUpdate={this.updateHandler}>
          <View
            style={[styles.player, {left: this.state.x, top: this.state.y}]}
          />
        </GameLoop>
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
  player: {
    position: 'absolute',
    backgroundColor: 'pink',
    width: RADIUS * 2,
    height: RADIUS * 2,
    borderRadius: RADIUS * 2,
  },
});
