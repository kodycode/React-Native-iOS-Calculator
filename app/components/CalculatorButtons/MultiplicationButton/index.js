import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import styles from '../style';

class MultiplicationButton extends Component {
  constructor(props) {
    super();
  }

  _multiplyBy = () => {
    if (this.props.getOperation === 'multiplication')
    {
      this.props.setOperation('none');
    }
    this.props.setOperation('multiplication');
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} style={styles.OperatorButtonBox} onPressOut={this._multiplyBy}>
        <Text style={styles.OperatorButtonTextDisplay}>x</Text>
      </TouchableOpacity>
    )
  }
}

module.exports = MultiplicationButton;