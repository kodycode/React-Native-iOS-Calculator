import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import styles from '../style';

class PosOrNegButton extends Component {
  constructor(props) {
    super();
  }

  _posOrNeg = () => {
    this.props.posOrNeg();
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} style={styles.MiscButtonBox} onPressOut={this._posOrNeg}>
        <Text style={styles.MiscButtonTextDisplay}>+/−</Text>
      </TouchableOpacity>
    )
  }
}

module.exports = PosOrNegButton;