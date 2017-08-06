import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import styles from '../style';

class DecimalButton extends Component {
  constructor(props) {
    super();
  }

  _appendDecimal = () => {
    this.props.convertToDecimal();
  }

  render() {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.NumberButtonBox} onPressOut={this._appendDecimal}>
          <Text style={styles.NumberButtonTextDisplay}>.</Text>
        </TouchableOpacity>
    )
  }
}

module.exports = DecimalButton;