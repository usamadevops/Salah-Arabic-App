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
    <SafeAreaView style={{ flexDirection: 'row',height:110, alignItems: 'center' }}>
      {icon == null ? <TouchableOpacity onPress={() => navigation.goBack()}>
        <Entypoo icon={'chevron-small-left'} color={'gray'} size={45} />
      </TouchableOpacity> :<View style={{marginLeft:15}}/>}
      <Image source={require('../../assets/images/Group71.png')} />
      <Text
        style={{ left: 50, fontSize: 20, color: 'black' }}>
        {name}
      </Text>
      {showIcon ?
        <TouchableOpacity style={{ marginHorizontal: screenWidth * 0.32 }}>
          <SettingIcon height={24} width={24} />
        </TouchableOpacity> : null}
    </SafeAreaView>
  );
}
export default OptionsHeader;