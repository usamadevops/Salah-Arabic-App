import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TutorialData } from '../../../../data/Tutorial';
export const TutorialList = ({navigation}) => {
  return (
    <View style={{ flex: 1, padding: 20,flexDirection:'row',flexWrap:"wrap" }}>
      {/* Card Layout */}
      {TutorialData.map((items, index) => {
        return (
          <TouchableOpacity style={{ width: '44%',  backgroundColor: "#CF5300", borderRadius: 10 ,marginHorizontal:10,marginVertical:20,padding:15,alignItems:'center',justifyContent:"center"}}
          onPress={()=>navigation.navigate('viewtutorial',{
            data:items
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
  )
}



const styles = StyleSheet.create({})