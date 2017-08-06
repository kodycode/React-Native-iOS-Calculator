import {
  StyleSheet,
  Dimensions
} from 'react-native';

var {width, height} = Dimensions.get('screen');
var TextBoxHeight = (height/3) - 25;

const styles = StyleSheet.create({
    TextBox: {
      justifyContent: 'flex-end',
      height: TextBoxHeight,
      width: width,
      backgroundColor: 'black'
    }
});

module.exports = styles