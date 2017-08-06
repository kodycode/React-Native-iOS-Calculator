import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import styles from '../style';

class AllClearButton extends Component {
  constructor(props) {
    super();
  }

  _allClear = () => {
    this.props.allClear();
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} style={styles.MiscButtonBox} onPressOut={this._allClear}>
        <Text style={styles.MiscButtonTextDisplay}>AC</Text>
      </TouchableOpacity>
    )
  }
}

module.exports = AllClearButton;