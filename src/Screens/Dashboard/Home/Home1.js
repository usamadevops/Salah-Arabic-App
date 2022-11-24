/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, TouchableOpacity, Dimensions,Platform, Alert } from 'react-native';
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

  const showAlert = () =>
  Alert.alert(
    "ما يجب أن تحمله كل مركبة",
    "\n•  First Aid Kit  حقيبة إسعاف أولي \n•  Flashlight  مصباح يدوي   \n•  Spare Fuses الصمامات الغيار \n•  Car Jack  جاك السيارة \n •  Warning Triangles  المثلثات التحذيرية \n •  Spare Tire  الأطار الأحتياطي   \n •  High Visibility Clothing  ملابس عالية الوضوح \n\n",
    [
      {
        text: "موافق",
        style: "default",
      },
    ]
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Upper Section */}
      <View style={{ flex:1.8, top: Platform.OS==='ios'?20:80 }}>
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
      <View style={{top:-25}}>
        <TouchableOpacity
          style={{ marginVertical: 10, backgroundColor: colors.prinamry, width: Dimensions.get('screen').width * 0.7, height: Dimensions.get('screen').height * 0.055, alignItems: 'center', justifyContent: 'center', borderRadius: 40 }}
          onPress={() => navigation.navigate('Home2Stack')}
        >
          <Text style={{ color: colors.secondary, fontSize: 16 }}>لنصلح سيارتك</Text>
        </TouchableOpacity>

      </View>
      <TouchableOpacity style={{ flex:Platform.OS==='ios'? 0.2:0.18, width: '100%', alignItems: 'center' }}
      >
        <View style={{ width: '90%', height: '100%', backgroundColor: '#ffffff', zIndex: 10, borderRadius: 10 }}>
          <View style={{ right: 30, position: 'absolute',top:Platform.OS==='ios'?0:10 }}>
            <Text >
              اعتني بسيارتك
            </Text>
          </View>
        </View>
        <View style={{ height: 5, width: '100%', position: 'absolute', alignItems: 'center', justifyContent: 'center', top: '50%', zIndex: -1, backgroundColor: colors.prinamry }} />

      </TouchableOpacity>
      {/* After middle Section */}
      <View style={{ flex: 0.9, flexDirection: 'row', marginVertical:20}}>
        <Card text={'التفتيش المنتظم'} icon_svg={<Home_insurance />} screen={'inspection'} />
        <Card text={'الشراء المسبق'} icon_svg={<Home_repair />} screen={'prepurchase'} />
        <Card text={' دروس الإصلاح'} icon_svg={<Home_settings />} screen={'tutorialList'}/>

      </View>
      {/*Bottom Section */}
      <TouchableOpacity style={{ flex:Platform.OS==='ios'? 0.2:0.18, width: '100%', alignItems: 'center' ,bottom:Platform.OS==='ios'?20:50}}
            onPress={()=>showAlert()}
            activeOpacity={0.7}
      >
        <View style={{ width: '90%', height: '100%', backgroundColor: '#ffffff', zIndex: 10, borderRadius: 10 }}>
          <View style={{ right: 30, position: 'absolute',top:Platform.OS==='ios'?0:10 }}>
            <Text style={{ fontSize: 14 }}>
              <Text style={{ fontSize: 12, color: '#8F8E8E' }}>
                What every vehicle should carry {'   '}
              </Text>
              ما يجب أن تحمله كل مركبة
            </Text>
          </View>
        </View>
        <View style={{ height: 5, width: '100%', position: 'absolute', alignItems: 'center', justifyContent: 'center', top: '50%', zIndex: -1, backgroundColor: colors.prinamry }} />

      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#D5D3D330'

  },
});
