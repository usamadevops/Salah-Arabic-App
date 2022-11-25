/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

const LoginInput = props => {
  return (
    <View style={styles.textinput}>
      <TextInput
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        style={styles.input}
      />
      {props.icon}
    </View>
  );
};

export default LoginInput;

const styles = StyleSheet.create({
  input: {
    textAlign: 'center',
    height:60,
    width: Dimensions.get('screen').width * 0.7,
    fontSize:17,
    fontFamily:'Segoe UI'
  },
  textinput: {
    alignItems:'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    backgroundColor: '#ECECEC',
  },
});
