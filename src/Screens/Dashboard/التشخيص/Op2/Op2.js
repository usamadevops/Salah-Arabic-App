/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import * as Component from '../../../../Components';
import colors from '../../../../Contants/colors';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const Op2 = ({ navigation }) => {
  const data = [
    {
      name: 'صوت نقر',
      screen: 'صوت نقر'
    },
    {
      name: 'صوت طقطقة',
      screen: 'صوت طقطقة'
    },
    {
      name: 'الفرامل تصدر ضوضاء',
      screen: 'الفرامل تصدر ضوضاء'
    },
    {
      name: 'تفتفة المحرك او شرقان',
      screen: 'تفتفة المحرك او شرقان',
      subtitle:'Sputter and cough'
    },
    {
      name: '(الوخز /التنصت'+')',
      screen: 'الوخز /التنصت'+')',
      subtitle:'Ticking / Tapping'
    },
    {
      name: 'فرقعة بالمحرك (انفجارات)',
      screen: 'فرقعة بالمحرك (انفجارات)'
    },
    {
      name: 'المحرك يعمل بشكل خشن',
      screen: 'المحرك يعمل بشكل خشن'
    },
    {
      name: 'طقطقة',
      screen: 'طقطقة'
    },
  ];
  const renderitem = ({ item }) => {
    return <Component.Button.Button name={item.name} navigation={navigation} screen={item.screen} subtitle={item.subtitle} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={(
          <View style={{ marginHorizontal: screenWidth * 0.11 }}>
            <Text style={styles.title}>ماذا تسمع؟</Text>
            <Text style={styles.heading}>ماذا تسمع؟</Text>
          </View>
        )}
        data={data}
        renderItem={renderitem}
      />
    </View>
  )
}

export default Op2;

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
    marginLeft:40,
    color: colors.background,
    marginRight: screenWidth * 0.4
  },
});
