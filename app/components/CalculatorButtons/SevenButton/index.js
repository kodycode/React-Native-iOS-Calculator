import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import styles from '../style';

class SevenButton extends Component {
  constructor(props) {
    super();
  }

  _appendSeven = () => {
    this.props.appendNumber('7');
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} style={styles.NumberButtonBox} onPressOut={this._appendSeven}>
        <Text style={styles.NumberButtonTextDisplay}>7</Text>
      </TouchableOpacity>
    )
  }
}

module.exports = SevenButton;