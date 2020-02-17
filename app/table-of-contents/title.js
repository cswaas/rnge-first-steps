import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class Title extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={css.container}>
        <Text style={css.titleText}>
          THE <Text style={css.bold}>NATURE</Text> OF
        </Text>
        <Text style={[css.titleText, css.small]}>— CODE —</Text>
      </View>
    );
  }
}

const css = EStyleSheet.create({
  $borderHeight: 0.005,
  $fontHeight: 0.038,
  $lineHeight: 0.067,
  $letterSpacingWidth: 0.013,
  $paddingHeight: 0.105,
  container: {
    paddingTop: '$paddingHeight',
    alignItems: 'center',
  },
  titleText: {
    fontSize: '$fontHeight',
    backgroundColor: 'transparent',
    letterSpacing: '$letterSpacingWidth',
    color: '#FFF',
  },
  bold: {
    fontWeight: '900',
  },
  small: {
    fontSize: '$fontHeight * 0.6',
    lineHeight: '$lineHeight',
  },
});
