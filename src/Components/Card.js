import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Card = (props) => {
    const navigation=useNavigation();
  return (
    <TouchableOpacity style={{width:'30%',height:140,backgroundColor:'#E5E5E5',padding:10,paddingHorizontal:20,borderRadius:10,marginHorizontal:5}}
    onPress={()=>{navigation.navigate(props.screen)}}
    >
      <Text>{props.text}</Text>
      <View style={{marginVertical:10}}>
      {props.icon_svg}
      </View>
    </TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({})