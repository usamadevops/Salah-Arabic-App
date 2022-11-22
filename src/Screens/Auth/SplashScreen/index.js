/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import React,{useEffect} from 'react';
import colors from '../../../Contants/colors';

const SplashScreen = ({navigation}) => {

    useEffect(()=> {
            setTimeout(() =>  navigation.navigate('LoginScreen'), 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <View style={styles.container}>
            <View style={{ position: 'absolute', flexDirection: 'row',  }}>
                <View style={styles.circle2} >
                    <View style={styles.circle1} />
                </View>
            </View>
            <View style={styles.body}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.logo}>
                        <Image
                            // eslint-disable-next-line react-native/no-inline-styles
                            style={{
                                position: 'absolute',
                                width: '50%',
                            }}
                            source={require('../../../assets/images/Logo.png')}
                        />
                    </View>
                    <View style={styles.title}>
                        <Text style={styles.title_test}>جار التحميل</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footer_Title}>مقدمة</Text>
                    <Text style={styles.footer_data}>لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة،.</Text>
                </View>
            </View>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: colors.prinamry,
        flexDirection: 'column',
        paddingHorizontal: 10
    },
    body: {
        marginTop: Dimensions.get('screen').height / 3.2
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.secondary,
        // paddingHorizontal: 90,
        // paddingVertical:80,
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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:30
    },
    footer_Title: {
        color: '#C48519',
        fontSize: 20
    },
    footer_data: {
        color: colors.secondary,
        textAlign: 'center'
    },
    circle1: {
        bottom:45,
        // paddingRight:10,
        // paddingRight:100,
        left:150,
        position:'absolute',
        backgroundColor: colors.secondary,
        height: Dimensions.get('screen').height / 3.5,
        width: Dimensions.get('screen').width/1.5 ,
        opacity: 0.5,
        borderRadius: 350
    },
    circle2: {
        bottom:5,
        left:45,
        // position:'absolute',
        backgroundColor: colors.secondary,
        height: Dimensions.get('screen').height / 2.9,
        width: Dimensions.get('screen').width / 1.2,
        opacity: 0.1,
        borderRadius: 350
    }
});
