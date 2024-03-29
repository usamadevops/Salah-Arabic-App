import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import YoutubeSvg from '../../../../assets/svg/tutorial/youtube.svg'
export const Viewtutorial = ({ navigation, route }) => {
  const { heading,pic,sentence1,sentence2 } = route.params;
  console.log(pic)
  return (
    <ScrollView style={{ flex: 1,paddingHorizontal:10, }}>
        <View style={{position:'absolute',width:250,height:250,borderRadius:200,backgroundColor:'#f5f5f5'}}/>
      <View style={{ flex: 1 ,flexDirection:'row',alignItems:'center',justifyContent:"space-evenly"}}>
        <View style={{padding:40}}>
          {pic}
        </View>
        <Text style={{fontSize:32}}>
          {heading}
        </Text>
      </View>
      <View style={{ flex: 1 ,flexDirection:'row'}}>
        <Text style={{color:'#040404',fontSize:16}}>
          {sentence1}
        </Text>
      </View>
      <View style={{flex:1,marginVertical:24,alignSelf:'center'}}>
      <YoutubeSvg/>
      </View>
      <View style={{ flex: 1 ,flexDirection:'row',paddingHorizontal:10}}>
        <View style={{padding:20}}>
          {pic}
        </View>
      <View style={{maxWidth:'58%',paddingBottom:16}}>
        <Text style={{fontSize:16,color:'#040404'}}>
          {sentence2}
        </Text>
        </View>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({})