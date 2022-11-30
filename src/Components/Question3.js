import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import * as Component from '../Components'
import colors from '../Contants/colors'
const screenWidth = Dimensions.get('screen').width;

const Questions = ({ navigation, route }) => {
  const { data, title, subtitle, icon } = route.params;
  return (
    <ScrollView style={{ flex: 1 ,paddingVertical:16 }}>

      <View style={styles.container}>
        <View style={{ marginRight: screenWidth * 0.6 }}>
          <Text style={styles.title}>ماذا ترى؟</Text>
        </View>
        <Text style={styles.heading}>{title ||subtitle}</Text>
        {data && data.map((q, index) => {
          return (
            <View key={index}>
              <Component.Button.Button name={q.text} questions={q.questions_4} subtitle={q.Subtitle} navigation={navigation} alert={q.alert} screen={'questions3'} icon={q.icon} />
            </View>
          )
        })}

      </View>
    </ScrollView>
  );
};

export default Questions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
    marginHorizontal:16
  },
  title: {
    textAlign: 'center',
    right: '25%',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#8F8E8E',
  },
});
