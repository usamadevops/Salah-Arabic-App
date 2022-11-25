/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import * as Component from '../../../../Components';
import colors from '../../../../Contants/colors';
import smell from '../../../../data/Smell.json';
const screenWidth = Dimensions.get('screen').width;
const Op3 = ({ navigation }) => {
  const renderitem = ({ item }) => {
    return <Component.Button.Button name={item.title} navigation={navigation} questions={item.questions_1} alert={item.alert} subtitle={item.Subtitle} screen={'questions'} />;
  }
  return (
   
    <View style={styles.container}>
      <View style={{marginRight:screenWidth * 0.1}}>
        <Text style={styles.title}> {smell.header}</Text>
        <Text style={styles.heading}>{smell.header}</Text>
      </View>
      <FlatList
        data={smell.smell}
        renderItem={renderitem}
      />
    </View>
  )
}

export default Op3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    // justifyContent: 'center',
    flexDirection: 'column',
    // paddingHorizontal: 10,
    // backgroundColor:colors.secondary
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 25,
    left:170
  },
  title: {
    textAlign: 'center',
    left: 10,
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#8F8E8E',
    marginRight:screenWidth * 0.4
  },
});
