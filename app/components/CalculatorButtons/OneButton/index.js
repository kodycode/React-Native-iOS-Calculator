import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import styles from '../style';

class OneButton extends Component {
  constructor(props) {
    super();
  }

  _appendOne = () => {
    this.props.appendNumber('1');
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} style={styles.NumberButtonBox} onPressOut={this._appendOne}>
        <Text style={styles.NumberButtonTextDisplay}>1</Text>
      </TouchableOpacity>
    )
  }
}

module.exports = OneButton;