import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import styles from '../style';

class FourButton extends Component {
  constructor(props) {
    super();
  }

  _appendFour = () => {
    this.props.appendNumber('4');
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} style={styles.NumberButtonBox} onPressOut={this._appendFour}>
        <Text style={styles.NumberButtonTextDisplay}>4</Text>
      </TouchableOpacity>
    )
  }
}

module.exports = FourButton;