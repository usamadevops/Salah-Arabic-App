import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView,
  } from 'react-native';
  import React from 'react';
  import  * as Component from '../Components'
  import colors from '../Contants/colors'
  const screenWidth = Dimensions.get('screen').width;
  
  const Questions4 = ({ navigation,title,subtitle,questions,route }) => {
    const {data}=route.params;
    return (
      <ScrollView style={{flex:1}}>
      
        <View style={styles.container}>
        <View style={{marginRight:screenWidth * 0.1}}>
          <Text style={styles.title}>ماذا ترى؟</Text>
         
        </View>
          { data && data.map((q,index)=>{
            return(
              <View>
              <Text style={styles.heading}>{q.text}</Text>
  {
  q.questions_3 &&  q.questions_3.map((q1,index2)=>{
   
      return(
        <View key={index2}>
  <Component.Button.Button name={q1.text} questions={q1} navigation={navigation} screen={'questions3'} icon={q1.icon} />
  </View>
      )
    })
  
  }
  </View>
            )
          })}
        </View>
      </ScrollView>
    );
  };
  
  export default Questions4;
  
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
    },
    title: {
      textAlign: 'center',
      right: '25%',
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 40,
      color: colors.background,
    },
  });
  