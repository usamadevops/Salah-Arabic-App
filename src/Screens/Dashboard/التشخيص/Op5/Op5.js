/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import * as Component from '../../../../Components';
import colors from '../../../../Contants/colors';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const Op5 = ({ navigation }) => {
  const data = [
    {
      name: 'توقف المحرك ',
      screen: 'توقف المحرك '
    },
    {
      name: 'يشعر المحرك بالضعف',
      screen: 'يشعر المحرك بالضعف'
    },
    {
      name: 'قلة الهواء الساخن / البارد ',
      screen: 'قلة الهواء الساخن / البارد'
    },
    {
      name: ' السيارة ماتعشق القير',
      screen: ' السيارة ماتعشق القير'
    },
    {
      name: 'يمكنني التعشيق، لكن السيارة لا تتحرك ',
      screen: 'يمكنني التعشيق، لكن السيارة لا تتحرك ',
      fontSize:18,
      width:screenWidth * 0.1
    },
    {
      name: 'السيارة لاتعمل',
      screen: 'السيارة لاتعمل'
    },
    {
      name: 'أطفئ السيارة ، لكن المحرك يستمر في العمل ',
      screen: 'أطفئ السيارة ، لكن المحرك يستمر في العمل ',
      fontSize:16,
      width:screenWidth * 0.5
    },
    {
      name: 'استهلاك عالي للوقود',
      screen: 'استهلاك عالي للوقود'
    },
  ];
  const renderitem = ({ item }) => {
    return <Component.Button.Button name={item.name} navigation={navigation} screen={item.screen} fontSize={item.fontSize} width={item.width}/>;
  }
  return (
    <View style={styles.container}>
      <View style={{marginRight:screenWidth * 0.1}}>
        <Text style={styles.title}>لن تبدأ السيارة؟</Text>
        <Text style={styles.heading}>ما الذي لايعمل بشكل صحيح؟</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderitem}
      />
    </View>
  )
}

export default Op5;

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
    fontSize: 20,
  },
  title: {
    textAlign: 'center',
    right: '25%',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 40,
    color: colors.background,
    marginRight:screenWidth * 0.3
  },
});
