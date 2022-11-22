/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import * as Component from '../../../../Components';
import colors from '../../../../Contants/colors';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const Op1 = ({ navigation }) => {
  const data = [
    {
      name: 'بخار',
      screen: 'بخار'
    },
    {
      name: 'ارتفاع درجة حرارة المحرك',
      screen: 'ارتفاع درجة حرارة المحرك'
    },
    {
      name: 'ضوء التحذير',
      screen: 'ضوء التحذير'
    },
    {
      name: 'إطار متآكل',
      screen: 'إطار متآكل'
    },
    {
      name: 'استهلاك عالي للوقود',
      screen: 'استهلاك عالي للوقود'
    },
    {
      name: 'دخان',
      screen: 'دخان'
    },
  ];
  const renderitem = ({ item }) => {
    return <Component.Button.Button name={item.name} navigation={navigation} screen={item.screen} />;
  }
  return (
    <View style={styles.container}>
      <View style={{marginRight:screenWidth * 0.1}}>
        <Text style={styles.title}>ماذا ترى؟</Text>
        <Text style={styles.heading}>ما نوع الأعراض التي تعانيها؟</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderitem}
      />
    </View>
  )
}

export default Op1;

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
  },
  title: {
    textAlign: 'center',
    right: '25%',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.background,
    marginRight:screenWidth * 0.4
  },
});
