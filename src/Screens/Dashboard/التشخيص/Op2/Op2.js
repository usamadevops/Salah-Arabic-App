/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import * as Component from '../../../../Components';
import colors from '../../../../Contants/colors';
import Hear from '../../../../data/Hear.json';
const screenWidth = Dimensions.get('screen').width;
const Op2 = ({ navigation }) => {

  const renderitem = ({ item }) => {
    return <Component.Button.Button name={item.title} navigation={navigation} questions={item.questions_1} alert={item.alert} subtitle={item.Subtitle} screen={'questions'} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={(
          <View style={{ marginHorizontal: screenWidth * 0.11 }}>
            <Text style={styles.title}>ماذا تسمع؟</Text>
            <Text style={styles.heading}> {Hear.header}</Text>
          </View>
        )}
        data={Hear.hear}
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
