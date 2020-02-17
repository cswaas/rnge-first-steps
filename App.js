import React, {Component} from 'react';
import {View, Modal} from 'react-native';
import CloseButton from './app/table-of-contents/closeButton';
import EStyleSheet from 'react-native-extended-stylesheet';

// import {GameEngine, GameLoop} from 'react-native-game-engine';
// import {Finger} from './components/renderers';
// import {MoveFinger} from './components/systems';
// import Header from './components/Header';

import TableOfContents from './app/table-of-contents';
import TouchChapter from './app/touch-events';

// const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');
// const RADIUS = 25;

EStyleSheet.build();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sceneVisible: false,
      scene: null,
    };
  }

  mountScene = scene => {
    this.setState({
      sceneVisible: true,
      scene: scene,
    });
  };

  unMountScene = () => {
    this.setState({
      sceneVisible: false,
      scene: null,
    });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <TableOfContents
          sceneVisible={this.state.sceneVisible}
          contents={{
            heading: 'Chapters',
            items: [
              TouchChapter(this.mountScene),
              // PhysicsChapter(this.mountScene),
              // SensorsChapter(this.mountScene),
              // OpenGLChapter(this.mountScene),
              // ExamplesChapter(this.mountScene)
            ],
          }}
        />
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.sceneVisible}
          onRequestClose={_ => {}}>
          {this.state.scene}

          <CloseButton onPress={this.unMountScene} />
        </Modal>
      </View>
    );
  }
}

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

/* Example with GameLoop 
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

*/
