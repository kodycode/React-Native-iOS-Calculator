import React, { Component } from 'react';
import {
  StyleSheet,
  AppRegistry,
  View,
  StatusBar
} from 'react-native';
import TextDisplay from './app/components/TextDisplay';
import CalculatorButtons from './app/components/CalculatorButtons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray'
  }
});

const NUMBERLIMIT = 9;
const DECIMALLIMIT = 2;

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operationSuccess: false,
      currentOperation: 'none',
      coproduct: 'none',
      previousText: 'none',
      currentText: '0'
    }
  }

  setOperation = (operation) => {
    if (operation === 'none' || this.state.currentOperation !== operation)
    {
      this.setState({coproduct: 'none'});
      this.setState({operationSuccess: false})
    }

    this.setState({currentOperation: operation});
    this.setState({previousText: this.state.currentText});
    this.setState({currentText: '0'});
  }

  evaluate = () => {
    var coproduct;
    var result;

    this.state.coproduct === 'none' ? (
      coproduct = this.state.currentText, 
      this.setState({coproduct: coproduct})
    ) : (
      coproduct = this.state.coproduct
    );

    switch (this.state.currentOperation)
    {
      case ('multiplication'):
      {
        result = parseFloat(this.state.previousText) * parseFloat(coproduct);
        break;
      }

      case ('division'):
      {
        result = parseFloat(this.state.previousText) / parseFloat(coproduct);
        break;
      }
      
      case ('subtraction'):
      {
        result = parseFloat(this.state.previousText) - parseFloat(coproduct);
        break;
      }

      case ('addition'):
      {
        result = parseFloat(this.state.previousText) + parseFloat(coproduct);
        break;
      }

      default:
      {
        break;
      }
    }
    
    if (this.state.currentOperation !== 'none')
    {
      this.setState({operationSuccess: true});
      this.setState({currentText: result});
      this.setState({previousText: result});
    }
  }

  allClear = () => {
    this.setState({operationSuccess: false});
    this.setState({currentOperation: 'none'});
    this.setState({coproduct: 'none'});
    this.setState({previousText: 'none'});
    this.setState({currentText: '0'});
  }

  posOrNeg = () => {
    var result;

    result = 0 - parseFloat(this.state.currentText);
    this.setState({currentText: result});

    if (this.state.operationSuccess)
    {
      this.setState({previousText: result});
    }
  }

  convertToDecimal = () => {
    var numLengthOfCurrentText = this.state.currentText.replace(/\D/g,'').length;
    
    if (numLengthOfCurrentText < NUMBERLIMIT)
    {
      if (this.state.currentText.indexOf('.') === -1)
      {
        this.setState({currentText: this.state.currentText + '.'});
      }
    }
  }

  convertToPercent = () => {
    var percentNum = (parseFloat(this.state.currentText) / 100).toString();
    var numOfDecimalDigits = percentNum.toString().length - (percentNum.toString().indexOf('.') + 1);
      
    if (numOfDecimalDigits <= DECIMALLIMIT)
    {
      this.setState({currentText: percentNum});
    }
  }

  appendNumber = (buttonInput) => {
    var numLengthOfCurrentText = this.state.currentText.toString().replace(/\D/g,'').length;
    var numOfDecimalDigits;

    this.state.currentText.toString().indexOf('.') !== -1 ? (
      numOfDecimalDigits = this.state.currentText.toString().length - (this.state.currentText.toString().indexOf('.') + 1)
    ) : (
      numOfDecimalDigits = 0
    )

    if (numLengthOfCurrentText < NUMBERLIMIT && numOfDecimalDigits < DECIMALLIMIT)
    {
      if (this.state.currentText === '0' || this.state.operationSuccess)
      {
        this.setState({currentText: buttonInput});

        if (this.state.operationSuccess)
        {
          this.setState({operationSuccess: false});
          this.setState({previousText: buttonInput});
        }
      }
      else 
      {
        this.setState({currentText: this.state.currentText + buttonInput})
      }  
    }
  }

  removeNumber = () => {
    this.setState({currentText: this.state.currentText.toString().slice(0, -1)});
  }

  formatText = () => {
    return parseFloat(this.state.currentText).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 2});
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <StatusBar barStyle="light-content"/>
        </View>
        <TextDisplay 
          operationSuccess={this.state.operationSuccess}
          removeNumber={this.removeNumber}
          getText={this.formatText()}
        />
        <CalculatorButtons 
          currentOperation={this.state.currentOperation}
          setOperation={this.setOperation}
          evaluate={this.evaluate}
          allClear={this.allClear}
          posOrNeg={this.posOrNeg}
          convertToDecimal={this.convertToDecimal}
          convertToPercent={this.convertToPercent}
          appendNumber={this.appendNumber}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('Calculator', () => Calculator);
