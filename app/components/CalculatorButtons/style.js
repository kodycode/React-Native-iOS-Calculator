import {
  StyleSheet,
  Dimensions
} from 'react-native';

var {width, height} = Dimensions.get('screen');
var buttonWidth = (width/4) - StyleSheet.hairlineWidth;
var zeroButtonWidth = (buttonWidth + StyleSheet.hairlineWidth) * 2;
var TextBoxHeight = (height/3) - 25;

const styles = StyleSheet.create({
  ButtonForm: {
    height: height - TextBoxHeight,
    backgroundColor: 'black',
    justifyContent: 'space-between'
  },
  RowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: StyleSheet.hairlineWidth
  },
  MiscButtonBox: {
    width: buttonWidth,
    height: buttonWidth,
    justifyContent: 'center',
    backgroundColor: '#D3D3D3'
  },
  MiscButtonTextDisplay: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Helvetica-Light',
    fontSize: 30
  },
  OperatorButtonBox: {
    width: buttonWidth,
    height: buttonWidth,
    justifyContent: 'center',
    backgroundColor: 'orange'
  },
  OperatorButtonTextDisplay: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Helvetica-Light',
    fontSize: 40
  },
  NumberButtonBox: {
    width: buttonWidth,
    height: buttonWidth,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  NumberButtonTextDisplay: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Helvetica-Light',
    fontSize: 50
  },
  ZeroButtonBox: {
    width: zeroButtonWidth,
    height: buttonWidth,
    justifyContent: 'center',
    backgroundColor: 'white'
  }
});

module.exports = styles;