import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import styles from '../style';

class ThreeButton extends Component {
  constructor(props) {
    super();
  }

  _appendThree = () => {
    this.props.appendNumber('3');
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} style={styles.NumberButtonBox} onPressOut={this._appendThree}>
        <Text style={styles.NumberButtonTextDisplay}>3</Text>
      </TouchableOpacity>
    )
  }
}

module.exports = ThreeButton;