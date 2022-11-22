/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import * as Component from '../../../../Components';
import colors from '../../../../Contants/colors';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const Op3 = ({ navigation }) => {
  const data = [
    {
      name: 'رائحة البيض الفاسد ',
      screen: 'رائحة البيض الفاسد '
    },
    {
      name: 'رائحة ​​من فتحات التكييف  إلى جانب التبريد السيئ',
      screen: 'رائحة ​​من فتحات التكييف  إلى جانب التبريد السيئ',
      fontSize:13,
      width:screenWidth * 0.01
    },
  ];
  const renderitem = ({ item }) => {
    return <Component.Button.Button name={item.name} navigation={navigation} screen={item.screen} fontSize={item.fontSize} width={item.width}/>;
  }
  return (
    <View style={styles.container}>
      <View style={{marginRight:screenWidth * 0.1}}>
        <Text style={styles.title}>ما هي الرائحة التي تشمها؟</Text>
        <Text style={styles.heading}>ماذا تشم؟</Text>
      </View>
      <FlatList
        data={data}
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
    fontSize: 20,
  },
  title: {
    textAlign: 'center',
    right: '25%',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 40,
    color: colors.background,
    // marginRight:screenWidth * 0.4
  },
});
