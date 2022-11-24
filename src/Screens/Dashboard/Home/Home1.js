/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home_car_bg from '../../../assets/svg/home/home_car_bg.svg';
import Home_car from '../../../assets/svg/home/home_car.svg';
import Home_insurance from '../../../assets/svg/home/home_insurance.svg';
import Home_settings from '../../../assets/svg/home/home_settings.svg';
import Home_repair from '../../../assets/svg/home/home_repair.svg';
import { Materiallconss } from '../../../Contants/Icon';
import colors from '../../../Contants/colors';
import Card from '../../../Components/Card';
const Home1 = ({ navigation }) => {
  // <TouchableOpacity onPress={()=>navigation.navigate('Home2Stack')}>
  //  <Text>Home2</Text>
  // </TouchableOpacity>
  return (
    <SafeAreaView style={styles.container}>
      {/* Upper Section */}
      <View style={{ flex:1.8, top: 20 }}>
        <Home_car_bg />
        <View style={{ position: "absolute", right: 50, top: -50 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Nissan Maxima
            {' '}
            <Materiallconss icon={'edit'} size={18} color={'#8D8D8D'} />
            {'   '}
            <Text style={{ fontSize: 16, fontWeight: "bold", color: '#8D8D8D', }}>
              سيارتك
            </Text>
          </Text>
          <Text>
            [2020-2022]
          </Text>
        </View>
        <View style={{ position: 'absolute', alignSelf: 'center', top: 10 }}>
          <Text style={{ fontSize: 24, color: 'black' }}>
            تشخيص مشاكل سيارتك
          </Text>
        </View>
        <View style={{ position: 'absolute' }}>
          <Home_car />
        </View>
      </View>
      {/* middle Section */}
      <View >
        <TouchableOpacity
          style={{ marginVertical: 10, backgroundColor: colors.prinamry, width: Dimensions.get('screen').width * 0.7, height: Dimensions.get('screen').height * 0.055, alignItems: 'center', justifyContent: 'center', borderRadius: 40 }}
          onPress={() => navigation.navigate('Home2Stack')}
        >
          <Text style={{ color: colors.secondary, fontSize: 16 }}>لنصلح سيارتك</Text>
        </TouchableOpacity>

      </View>
      <View style={{ flex: 0.2, width: '100%', alignItems: 'center' }}>
        <View style={{ width: '90%', height: '100%', backgroundColor: '#ffffff', zIndex: 10, borderRadius: 10 }}>
          <View style={{ right: 30, position: 'absolute' }}>
            <Text style={{}}>
              اعتني بسيارتك
            </Text>
          </View>
        </View>
        <View style={{ height: 5, width: '100%', position: 'absolute', alignItems: 'center', justifyContent: 'center', top: '50%', zIndex: -1, backgroundColor: colors.prinamry }} />

      </View>
      {/* After middle Section */}
      <View style={{ flex: 0.9, flexDirection: 'row', marginVertical:20}}>
        <Card text={'التفتيش المنتظم'} icon_svg={<Home_insurance />} screen={'inspection'} />
        <Card text={'الشراء المسبق'} icon_svg={<Home_repair />} screen={'prepurchase'} />
        <Card text={' دروس الإصلاح'} icon_svg={<Home_settings />} screen={'tutorialList'}/>

      </View>
      {/*Bottom Section */}
      <View style={{ flex: 0.2, width: '100%', alignItems: 'center' }}>
        <View style={{ width: '90%', height: '100%', backgroundColor: '#ffffff', zIndex: 10, borderRadius: 10 }}>
          <View style={{ right: 30, position: 'absolute' }}>
            <Text style={{ fontSize: 14 }}>
              <Text style={{ fontSize: 12, color: '#8F8E8E' }}>
                What every vehicle should carry {'   '}
              </Text>
              ما يجب أن تحمله كل مركبة
            </Text>
          </View>
        </View>
        <View style={{ height: 5, width: '100%', position: 'absolute', alignItems: 'center', justifyContent: 'center', top: '50%', zIndex: -1, backgroundColor: colors.prinamry }} />

      </View>
    </SafeAreaView>
  );
};

export default Home1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ECECEC'

  },
});
