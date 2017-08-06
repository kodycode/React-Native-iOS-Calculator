import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import styles from '../style';

class EvaluateButton extends Component {
  constructor(props) {
    super();
  }

  _evaluate = () => {
    this.props.evaluate();
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} style={styles.OperatorButtonBox} onPressOut={this._evaluate}>
        <Text style={styles.OperatorButtonTextDisplay}>=</Text>
      </TouchableOpacity>
    )
  }
}

module.exports = EvaluateButton;