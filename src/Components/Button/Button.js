/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { AntDesigne } from '../../Contants/Icon';
import SettingIcon from '../../assets/images/GearIcon.svg';
import colors from '../../Contants/colors';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default function Button({ navigation, name, screen, subtitle,fontSize,width }) {
    return (
        <TouchableOpacity style={styles.main} onPress={() => navigation.navigate(screen)}>
            <View style={styles.icons}>
                <AntDesigne icon={'caretleft'} color={colors.prinamry} size={17} />
                <SettingIcon height={35} width={35} />
            </View>
            {subtitle ?
                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end', right: screenWidth * 0.1, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 10, color:'#990404' }}>{subtitle}</Text>
                    <Text
                        style={{ fontSize: 16, fontWeight: 'bold', color: '#8F8E8E', alignItems: 'flex-end' }}>
                        {name}
                    </Text>
                </View>
                :
                <Text
                    style={{ flex:1,fontSize: fontSize||16, fontWeight: 'bold', color: '#8F8E8E', right: screenWidth * 0.1, alignItems: 'flex-end',width:width||null }}>
                    {name}
                </Text>
            }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent:'flex-end',
        alignContent: 'flex-end',
        borderWidth: 0.5,
        borderColor: 'gray',
        marginHorizontal: 20,
        marginVertical: 7,
        borderRadius: 12,
        height: screenHeight * 0.06,
        width: screenWidth * 0.9,
        backgroundColor: '#ECECEC',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    icons: {
        flexDirection: 'row',
        left: 10,
        alignItems: 'center',
    },
})
