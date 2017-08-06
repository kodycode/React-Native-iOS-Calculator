import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import styles from './style';
import AllClearButton from './AllClearButton';
import PosOrNegButton from './PosOrNegButton';
import PercentButton from './PercentButton';
import DivisionButton from './DivisionButton';
import SevenButton from './SevenButton';
import EightButton from './EightButton';
import NineButton from './NineButton';
import MultiplicationButton from './MultiplicationButton';
import FourButton from './FourButton';
import FiveButton from './FiveButton';
import SixButton from './SixButton';
import SubtractionButton from './SubtractionButton';
import OneButton from './OneButton';
import TwoButton from './TwoButton';
import ThreeButton from './ThreeButton';
import AdditionButton from './AdditionButton';
import ZeroButton from './ZeroButton';
import DecimalButton from './DecimalButton';
import EvaluateButton from './EvaluateButton';

class CalculatorButtons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.ButtonForm}>
        <View style={styles.RowStyle}>
          <AllClearButton allClear={this.props.allClear}/>
          <PosOrNegButton posOrNeg={this.props.posOrNeg}/>
          <PercentButton convertToPercent={this.props.convertToPercent}/>
          <DivisionButton
            getOperation={this.props.getOperation}
            setOperation={this.props.setOperation}
          />
        </View>
        <View style={styles.RowStyle}>
          <SevenButton appendNumber={this.props.appendNumber}/>
          <EightButton appendNumber={this.props.appendNumber}/>
          <NineButton appendNumber={this.props.appendNumber}/>
          <MultiplicationButton 
            getOperation={this.props.getOperation}
            setOperation={this.props.setOperation}
          />
        </View>
        <View style={styles.RowStyle}>
          <FourButton appendNumber={this.props.appendNumber}/>
          <FiveButton appendNumber={this.props.appendNumber}/>
          <SixButton appendNumber={this.props.appendNumber}/>
          <SubtractionButton
            getOperation={this.props.getOperation}
            setOperation={this.props.setOperation}
          />
        </View>
        <View style={styles.RowStyle}>
          <OneButton appendNumber={this.props.appendNumber}/>
          <TwoButton appendNumber={this.props.appendNumber}/>
          <ThreeButton appendNumber={this.props.appendNumber}/>
          <AdditionButton 
            getOperation={this.props.getOperation}
            setOperation={this.props.setOperation}
          />
        </View>
        <View style={styles.RowStyle}>
          <ZeroButton appendNumber={this.props.appendNumber}/>
          <DecimalButton convertToDecimal={this.props.convertToDecimal}/>
          <EvaluateButton evaluate={this.props.evaluate}/>
        </View>
      </View>
      )
  }
}

module.exports = CalculatorButtons;