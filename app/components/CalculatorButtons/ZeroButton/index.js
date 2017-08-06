import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import styles from '../style';

class ZeroButton extends Component {
  constructor(props) {
    super();
  }

  _appendZero = () => {
    this.props.appendNumber('0');
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} style={styles.ZeroButtonBox} onPressOut={this._appendZero}>
        <Text style={styles.NumberButtonTextDisplay}>0</Text>
      </TouchableOpacity>
    )
  }
}

module.exports = ZeroButton;