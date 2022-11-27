/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, FlatList, StyleSheet, Dimensions, ScrollView } from 'react-native';
import React from 'react';
import * as Component from '../../../../Components';
import colors from '../../../../Contants/colors';
import DStart from '../../../../data/Dstart.json';
const screenWidth = Dimensions.get('screen').width;

const Op5 = ({ navigation }) => {
  const renderitem = ({ item }) => {
    return <Component.Button.Button name={item.title} navigation={navigation} questions={item.questions_1} alert={item.alert} subtitle={item.Subtitle} screen={'questions'} />;
  }
  return (
    <ScrollView style={styles.container}>
      <View style={{marginRight:screenWidth * 0.1}}>
        <Text style={styles.title}>لن تبدأ السيارة؟</Text>
        <Text style={styles.heading}>{DStart.header}</Text>
      </View>
      {/* <FlatList
        data={DStart.dontstart}
        // keyExtractor={Math.random(Math.floor(1000*1))}
        renderItem={renderitem}
      /> */}
      {
        DStart.dontstart.map((item,index)=>{
          return(
            <Component.Button.Button name={item.title} navigation={navigation} questions={item.questions_1} alert={item.alert} subtitle={item.Subtitle} screen={'questions'} key={index}/>
          )
        })
      }
    </ScrollView>
  )
}

export default Op5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'flex-end',
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
    right: 100,
    top:10,
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#c4c4c4',
  },
});
