/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home1 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
     <TouchableOpacity onPress={()=>navigation.navigate('Home2Stack')}>
      <Text>Home2</Text>
     </TouchableOpacity>
    </SafeAreaView>
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
