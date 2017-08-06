import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import styles from '../style';

class EightButton extends Component {
  constructor(props) {
    super();
  }

  _appendEight = () => {
    this.props.appendNumber('8');
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} style={styles.NumberButtonBox} onPressOut={this._appendEight}>
        <Text style={styles.NumberButtonTextDisplay}>8</Text>
      </TouchableOpacity>
    )
  }
}

module.exports = EightButton;