import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import styles from '../style';

class NineButton extends Component {
  constructor(props) {
    super();
  }

  _appendNine = () => {
    this.props.appendNumber('9');
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} style={styles.NumberButtonBox} onPressOut={this._appendNine}>
        <Text style={styles.NumberButtonTextDisplay}>9</Text>
      </TouchableOpacity>
    )
  }
}

module.exports = NineButton;