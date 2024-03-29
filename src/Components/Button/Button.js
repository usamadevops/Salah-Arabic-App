/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Alert, Platform } from 'react-native';
import React from 'react';
import { AntDesigne } from '../../Contants/Icon';
import Backfill from '../../assets/svg/fillback.svg';
import SettingIcon from '../../assets/images/GearIcon.svg';
import colors from '../../Contants/colors';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default function Button({ navigation, name, screen, alert, subtitle, questions, fontSize, width, icon }) {
    return (
        <TouchableOpacity style={styles.main} onPress={() => {
            if (questions === undefined) {
                Alert.alert(
                 alert.text,
                    "",
                       [ {
                          text: "موافق",
                          style: "default",
                        },
                        Platform.OS==='android' &&
                        {
                            text: "                                                                     ",
                            style: "default",   
                          }
                    ]
                      
                );
            }
            else {
                navigation.push(screen, {
                    title: name,
                    icon: icon,
                    subtitle: subtitle,
                    data: questions,
                })
            }
        }}>
            <View style={styles.icons}>
                <View style={{ marginRight: 10 }}>
                    <Backfill />
                </View>
                {
                    icon !== null && <SettingIcon height={35} width={35} />
                }

            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center',  }}>
<View style={{width:'80%'}}>
                <Text
                    style={{ fontSize: fontSize || 14, fontWeight: 'bold', color: '#8F8E8E', right: screenWidth * 0.1, alignItems: 'flex-end', width: width || null }}>
                    {name}
                  
                </Text>
                </View>

            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
       
        borderWidth: 0.5,
        borderColor: 'gray',
      marginHorizontal:16,
        marginVertical: 8,
        borderRadius: 12,
        height: screenHeight * 0.08,
        width: screenWidth *0.9 ,
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
