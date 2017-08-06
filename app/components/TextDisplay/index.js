import React, {Component} from 'react';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures'
import {
  Text,
  View
} from 'react-native';
import styles from './style';

class TextDisplay extends Component {
  constructor(props) {
    super(props);
  }

  onSwipeLeft(gestureState) {
    if (this.props.getText.length !== 1 && this.props.operationSuccess !== true)
    {
      this.props.removeNumber();
    }
  }

  onSwipeRight(gestureState) {
    if (this.props.getText.length !== 1 && this.props.operationSuccess !== true)
    {
      this.props.removeNumber();
    }
  }

  adjustFontSize = function() {
    var lengthOfCurrentText = this.props.getText.length;
    
    if (lengthOfCurrentText === 8)
    {
      return {
        color: 'white',
        textAlign: 'right',
        fontFamily: 'Helvetica-Light',
        fontSize: 75,
        paddingRight: 15
      }
    }
    else if (lengthOfCurrentText === 9)
    {
      return {
        color: 'white',
        textAlign: 'right',
        fontFamily: 'Helvetica-Light',
        fontSize: 70,
        paddingRight: 15
      }
    }
    else if (lengthOfCurrentText === 10)
    {
      return {
        color: 'white',
        textAlign: 'right',
        fontFamily: 'Helvetica-Light',
        fontSize: 60,
        paddingRight: 15
      }
    }
    else if (lengthOfCurrentText >= 11)
    {
      return {
        color: 'white',
        textAlign: 'right',
        fontFamily: 'Helvetica-Light',
        fontSize: 55,
        paddingRight: 15
      }
    }
    
    return {
      color: 'white',
      textAlign: 'right',
      fontFamily: 'Helvetica-Light',
      fontSize: 80,
      paddingRight: 15
    }
  }

  render() {
    return (
      <GestureRecognizer
          onSwipeLeft={(state) => this.onSwipeLeft(state)}
          onSwipeRight={(state) => this.onSwipeRight(state)}
        >
        <View style={styles.TextBox}>
          <Text numberOfLines={1} style={this.adjustFontSize()}>
            {this.props.getText}
          </Text>
        </View>
      </GestureRecognizer>
    )
  }
}

module.exports = TextDisplay;