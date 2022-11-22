/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const Home1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home1</Text>
      <TouchableOpacity
      onPress={()=>navigation.navigate('Home2Stack')}
      >
        <Text>Home2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
