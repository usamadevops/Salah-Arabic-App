/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import React from 'react';
import { Entypoo } from '../../Contants/Icon';
import SettingIcon from '../../assets/images/Icon-feather-settings.svg';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const  OptionsHeader =({ navigation, name, showIcon, icon })=> {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {icon == null ? <TouchableOpacity onPress={() => navigation.goBack()}>
        <Entypoo icon={'chevron-small-left'} color={'gray'} size={45} />
      </TouchableOpacity> :<View style={{marginLeft:15}}/>}

      {/* <Logo2 height={70} width={90} /> */}
      <Image source={require('../../assets/images/Group71.png')} />
      <Text
        style={{ left: 50, fontSize: 20, color: 'black' }}>
        {name}
      </Text>
      {showIcon ?
        <TouchableOpacity style={{ marginLeft: screenWidth * 0.35 }}>
          <SettingIcon height={30} width={30} />
        </TouchableOpacity> : null}
    </View>
  );
}

export default OptionsHeader;