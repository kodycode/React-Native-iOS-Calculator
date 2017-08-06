import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import styles from '../style';

class SubtractionButton extends Component {
  constructor(props) {
    super();
  }

  _subtractBy = () => {
    if (this.props.getOperation === 'subtraction')
    {
      this.props.setOperation('none');
    }
    this.props.setOperation('subtraction');
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} style={styles.OperatorButtonBox} onPressOut={this._subtractBy}>
        <Text style={styles.OperatorButtonTextDisplay}>−</Text>
      </TouchableOpacity>
    )
  }
}

module.exports = SubtractionButton;