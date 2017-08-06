import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import styles from '../style';

class AdditionButton extends Component {
  constructor(props) {
    super();
  }

  _addBy = () => {
    if (this.props.getOperation === 'addition')
    {
      this.props.setOperation('none');
    }
    this.props.setOperation('addition');
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} style={styles.OperatorButtonBox} onPressOut={this._addBy}>
        <Text style={styles.OperatorButtonTextDisplay}>+</Text>
      </TouchableOpacity>
    )
  }
}

module.exports = AdditionButton;