import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import styles from '../style';

class TwoButton extends Component {
  constructor(props) {
    super();
  }

  _appendTwo = () => {
    this.props.appendNumber('2');
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} style={styles.NumberButtonBox} onPressOut={this._appendTwo}>
        <Text style={styles.NumberButtonTextDisplay}>2</Text>
      </TouchableOpacity>
    )
  }
}

module.exports = TwoButton;