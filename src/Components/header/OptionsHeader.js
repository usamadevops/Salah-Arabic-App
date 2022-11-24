/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import React from 'react';
import { Entypoo } from '../../Contants/Icon';
import SettingIcon from '../../assets/images/Icon-feather-settings.svg';
import { SafeAreaView } from 'react-native-safe-area-context';

const screenWidth = Dimensions.get('screen').width;

const  OptionsHeader =({ navigation, name, showIcon, icon })=> {
  return (
    <SafeAreaView style={{ flexDirection: 'row', alignItems: 'center',justifyContent:"space-evenly",backgroundColor:'#FEFDFD' }}>
      {icon !== null ?
       <TouchableOpacity onPress={() => navigation.goBack()}>
        <Entypoo icon={'chevron-small-left'} color={'gray'} size={45} />
      </TouchableOpacity> :<View style={{marginLeft:15}}/>
      }
      <View style={{flex:3}}>

      <Image source={require('../../assets/images/Group71.png')} />
      </View>
    
    <View style={{flex:3}}>
        <Text
        style={{ fontSize: 18, color: 'black' }}>
        {name}
      </Text>
      </View>
      {showIcon ?
        <TouchableOpacity style={{flex:1}}>
          <SettingIcon height={24} width={24} />
        </TouchableOpacity> : <></>
        }
    </SafeAreaView>
  );
}
export default OptionsHeader;