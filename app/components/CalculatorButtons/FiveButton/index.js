import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import styles from '../style';

class FiveButton extends Component {
  constructor(props) {
    super();
  }

  _appendFive = () => {
    this.props.appendNumber('5');
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} style={styles.NumberButtonBox} onPressOut={this._appendFive}>
        <Text style={styles.NumberButtonTextDisplay}>5</Text>
      </TouchableOpacity>
    )
  }
}

module.exports = FiveButton;