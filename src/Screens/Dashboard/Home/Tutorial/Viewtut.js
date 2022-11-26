import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import YoutubeSvg from '../../../../assets/svg/tutorial/youtube.svg'
export const Viewtutorial = ({ navigation, route }) => {
  const { data } = route.params;
  return (
    <View style={{ flex: 1,paddingHorizontal:10,alignItems:'center' }}>
        <View style={{position:'absolute',width:250,height:250,borderRadius:200,backgroundColor:'#f5f5f5'}}/>
      <View style={{ flex: 1 ,flexDirection:'row',alignItems:'center',justifyContent:"space-evenly"}}>
        <View style={{padding:40}}>
          {data.pic}
        </View>
        <Text style={{fontSize:32}}>
          {data.heading}
        </Text>
      </View>
      <View style={{ flex: 1 ,flexDirection:'row'}}>
        <Text style={{color:'#040404'}}>
          {data.sentence1}
        </Text>
      </View>
      <View style={{flex:1}}>
      <YoutubeSvg/>
      </View>
      <View style={{ flex: 1 ,flexDirection:'row',paddingHorizontal:10}}>
        <View style={{padding:20}}>
          {data.pic}
        </View>
      <View style={{maxWidth:'60%'}}>
        <Text style={{fontSize:12,color:'#040404'}}>
          {data.sentence2}
        </Text>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({})