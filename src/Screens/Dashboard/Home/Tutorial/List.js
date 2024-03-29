import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TutorialData } from '../../../../data/Tutorial';
import { ScrollView } from 'react-native-gesture-handler';
export const TutorialList = ({navigation}) => {
  return (
    <ScrollView>
    <View style={{ flex: 1, padding: 20,flexDirection:'row',flexWrap:"wrap" }}>
      {/* Card Layout */}
      {TutorialData.map((items, index) => {
        return (
          <TouchableOpacity style={{ width: Dimensions.get('screen').width*0.38,  backgroundColor: "#CF5300", borderRadius: 10 ,marginHorizontal:10,marginVertical:20,padding:15,alignItems:'center',justifyContent:"center"}}
          onPress={()=>navigation.navigate('viewtutorial',{
            heading:items.heading,
            pic:items.pic,
            sentence1:items.sentence1,
            sentence2:items.sentence2
          })}
          key={index}
          >
            <View style={{marginBottom:16}}>
              {items.pic}
            </View>
            <Text style={{color:'#fff',fontWeight:'bold',fontSize:16}}>
              {items.heading}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
    </ScrollView>
  )
}



const styles = StyleSheet.create({})