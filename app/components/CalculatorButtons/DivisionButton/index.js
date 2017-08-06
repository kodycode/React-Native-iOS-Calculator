import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import styles from '../style';

class DivisionButton extends Component {
  constructor(props) {
    super();
  }

  _divideBy = () => {
    if (this.props.getOperation === 'division')
    {
      this.props.setOperation('none');
    }
    this.props.setOperation('division');
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} style={styles.OperatorButtonBox} onPressOut={this._divideBy}>
        <Text style={styles.OperatorButtonTextDisplay}>÷</Text>
      </TouchableOpacity>
    )
  }
}

module.exports = DivisionButton;