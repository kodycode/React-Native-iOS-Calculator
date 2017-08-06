import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import styles from '../style';

class PercentButton extends Component {
  constructor(props) {
    super();
  }

  _convertToPercent = () => {
    this.props.convertToPercent();
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} style={styles.MiscButtonBox} onPressOut={this._convertToPercent}>
        <Text style={styles.MiscButtonTextDisplay}>%</Text>
      </TouchableOpacity>
    )
  }
}

module.exports = PercentButton;