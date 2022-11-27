/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import React from 'react';
import { Entypoo } from '../../Contants/Icon';
import Back from '../../assets/svg/back.svg'
import SettingIcon from '../../assets/images/Icon-feather-settings.svg';
import { SafeAreaView } from 'react-native-safe-area-context';

const screenWidth = Dimensions.get('screen').width;

const  OptionsHeader =({ navigation, name, showIcon, icon })=> {
  return (
    <SafeAreaView style={{ flexDirection: 'row', alignItems: 'center',justifyContent:"space-evenly",backgroundColor:'#FEFDFD',height:80 }}>
      {icon !== null ?
       <TouchableOpacity onPress={() => navigation.goBack()} style={{flex:1,padding:10}}>
       <Back />
      </TouchableOpacity> :<View style={{marginLeft:15}}/>
      }
      <View style={{flex:1}}>

      <Image source={require('../../assets/images/Group71.png')} />
      </View>
    
    <View style={{flex:5,marginLeft:48}}>
        <Text
        style={{ fontSize: 20, color: 'black' }}>
        {name}
      </Text>
      </View>
      <View style={{flex:1,marginLeft:100}}>
      {showIcon ?
        <TouchableOpacity >
          <SettingIcon height={24} width={24} />
        </TouchableOpacity> : <></>
        }
         </View>
    </SafeAreaView>
  );
}
export default OptionsHeader;