import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import styles from '../style';

class SixButton extends Component {
  constructor(props) {
    super();
  }

  _appendSix = () => {
    this.props.appendNumber('6');
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} style={styles.NumberButtonBox} onPressOut={this._appendSix}>
        <Text style={styles.NumberButtonTextDisplay}>6</Text>
      </TouchableOpacity>
    )
  }
}

module.exports = SixButton;