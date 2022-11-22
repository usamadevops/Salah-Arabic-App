/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import * as Component from '../../../../Components';
import colors from '../../../../Contants/colors';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const Op4 = ({ navigation }) => {
  const data = [
    {
      name: 'تهتز ',
      screen: 'تهتز '
    },
    {
      name: 'أثناء التوقف ',
      screen: 'أثناء التوقف '
    },
    {
      name: 'عند التسارع ',
      screen: 'عند التسارع '
    },
    {
      name: 'أثناء القيادة بسرعات معينة',
      screen: 'أثناء القيادة بسرعات معينة'
    },
    {
      name: 'السيارة بطيئة',
      screen: 'السيارة بطيئة'
    },
    {
      name: 'تعشيق غريب',
      screen: 'تعشيق غريب'
    },
    {
      name: 'توجيه غير طبيعي ',
      screen: 'توجيه غير طبيعي '
    },
  ];
  const renderitem = ({ item }) => {
    return <Component.Button.Button name={item.name} navigation={navigation} screen={item.screen} />;
  }
  return (
    <View style={styles.container}>
      <View style={{marginRight:screenWidth * 0.1}}>
        <Text style={styles.title}>ما هو شعورك؟</Text>
        <Text style={styles.heading}> ما هو شعورك؟ </Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderitem}
      />
    </View>
  )
}

export default Op4;

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
