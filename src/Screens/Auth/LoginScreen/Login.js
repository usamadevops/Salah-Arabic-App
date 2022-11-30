/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import colors from '../../../Contants/colors';
import * as Components from '../../../Components';
import Lock from '../../../assets/svg/lock.svg';
import Mail from '../../../assets/svg/mail.svg';
import User from '../../../assets/svg/user.svg';

import {Authorize} from '../../../redux/Modules/Auth';
const SplashScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    return (
        <ScrollView style={{   backgroundColor: 'lightgray',}}>
            <View style={styles.container}>
            <View style={{ position: 'absolute', flexDirection: 'row', }}>
                <View style={styles.circle2} >
                    <View style={styles.circle1} />
                </View>
            </View>
            <Image
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                    position: 'absolute',
                    width: '50%',
                    top: Dimensions.get('screen').height / 7.5,
                    left: Dimensions.get('screen').width * 0.25
                }}
                source={require('../../../assets/images/Logo.png')}
            />
            <View style={styles.body}>
                <View style={styles.input}>
                    <Components.Input.LoginInput placeholder={'الاسم الكامل'}  icon={<User/>}/>
                    <Components.Input.LoginInput placeholder={'البريد الإلكتروني'}  icon={<Mail/>} />
                    <Components.Input.LoginInput placeholder={'كلمه السر'}  icon={<Lock/>}/>
                </View>
                <TouchableOpacity
                    style={{ marginVertical: Dimensions.get('screen').height * 0.019, backgroundColor: colors.prinamry, width: Dimensions.get('screen').width * 0.6, height: Dimensions.get('screen').height * 0.08, alignItems: 'center', justifyContent: 'center', borderRadius: 40 }}
                    onPress={()=>dispatch(Authorize())}
                >
                    <Text style={{ color: colors.secondary }}>اشتراك</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text style={{color:'#AB0404',fontWeight:'bold'}}>سجل في</Text>
                <Text >هل لديك حساب؟ </Text>
            </View>
            </View>
        </ScrollView>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
        flexDirection: 'column',
        
        paddingHorizontal: '5%',
        paddingVertical:'5%'
    },
    body: {
        marginTop: Dimensions.get('screen').height * 0.37,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.secondary,
        height: '55%',
        width: '50%',
        borderRadius: 30
    },
    title: {
        marginTop: 40,
    },
    title_test: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.secondary
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '9%',
        marginBottom: '5%'
    },
    footer_Title: {
        color: '#C48519',
        // fontSize: 20
    },
    footer_data: {
        color: colors.secondary,
        textAlign: 'center'
    },
    circle1: {
        bottom: 45,
        // paddingRight:10,
        // paddingRight:100,
        left: 150,
        // position: 'absolute',
        backgroundColor: 'white',
        height: Dimensions.get('screen').height / 3.5,
        width: Dimensions.get('screen').width / 1.5,
        opacity: 0.6,
        borderRadius: 550,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    circle2: {
        bottom: 5,
        left: 45,
        // position:'absolute',
        backgroundColor: 'white',
        height: Dimensions.get('screen').width * 0.7,
        width: Dimensions.get('screen').width * 0.7,
        opacity: 0.2,
        borderRadius: 550,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    input: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    }
});
