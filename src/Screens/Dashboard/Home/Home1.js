/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, TouchableOpacity, Dimensions,Platform, Alert, ScrollView, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home_car_bg from '../../../assets/svg/home/home_car_bg.svg';
import Home_car from '../../../assets/svg/home/home_car.svg';
import Home_insurance from '../../../assets/svg/home/home_insurance.svg';
import Home_settings from '../../../assets/svg/home/home_settings.svg';
import Home_repair from '../../../assets/svg/home/home_repair.svg';
import Edit from '../../../assets/svg/edit.svg'
import colors from '../../../Contants/colors';
import Card from '../../../Components/Card';
const Home1 = ({ navigation,route }) => {
const {car,model,year}=route.params
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
      <ScrollView style={{flex:1, backgroundColor: '#f5f5f5',}} showsVerticalScrollIndicator={false}>
    <SafeAreaView style={styles.container}>
      {/* Upper Section */}
      <View style={{ flex:1, backgroundColor:'#f5f5f5',paddingTop:Dimensions.get('screen').height*0.1 }}>
        <Home_car_bg />
        <View style={{ flex:1,position: "absolute", right: 50  }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          {car!==null?car:'Nissan Maxima'}  
            {' '} 
            <Pressable onPress={()=>navigation.navigate('Dropdown')}
            android_ripple={{borderless:true,radius:20,color:'#c4c4c4'}}
            >
            <Edit/>
            </Pressable>
            {'   '}
            <Text style={{ fontSize: 16, fontWeight: "bold", color: '#8D8D8D', }}>
              سيارتك
            </Text>
          </Text>
          <Text>
          {model!=='' &&year!==''?`[${model+ '-' +year}]`:[2020-2022]}  
          </Text>
        </View>
        <View style={{flex:0.5, position: 'absolute', left: 50, top: 50,alignSelf:'flex-start' }}>
          <Text style={{ fontSize: 16, color: 'black' }}>
            تشخيص مشاكل سيارتك
          </Text>
        </View>
        <View style={{ position: 'absolute',top:Dimensions.get('screen').height*0.1 }}>
          <Home_car />
        </View>
      </View>
      {/* middle Section */}
      <View style={{flex:1,alignItems:'center'}}>
      <View style={{flex:1.5,elevation:2,marginBottom:16}}>
        <TouchableOpacity
        activeOpacity={0.7}
          style={{ marginVertical: 10, backgroundColor: colors.prinamry, width: Dimensions.get('screen').width * 0.7, height: Dimensions.get('screen').height * 0.065, alignItems: 'center', justifyContent: 'center', borderRadius: 40,elevation:2 }}
          onPress={() => navigation.navigate('Home2Stack')}
        >
          <Text style={{ color: colors.secondary, fontSize: 16 }}>لنصلح سيارتك</Text>
        </TouchableOpacity>

      </View>
      <TouchableOpacity style={{ flex:Platform.OS==='ios'?1:1, width: '100%',  height:Dimensions.get('screen').height*0.075,alignItems: 'center', }}
      >
        <View style={{ minWidth: '90%', height: '100%', backgroundColor: '#fff', zIndex: 10,paddingHorizontal:10, borderRadius: 10,elevation:2,justifyContent:'center' }}>
        
            <Text>
              اعتني بسيارتك
            </Text>
 
        </View>
        <View style={{ height: 5, width: '100%', position: 'absolute', alignItems: 'center', justifyContent: 'center', top: '50%', zIndex: -1, backgroundColor: colors.prinamry }} />

      </TouchableOpacity>
      {/* After middle Section */}
      <View style={{ flex: 3,marginVertical:24, flexDirection: 'row'}}>
        <Card text={'التفتيش المنتظم'} icon_svg={<Home_insurance />} screen={'inspection'} />
        <Card text={'الشراء المسبق'} icon_svg={<Home_repair />} screen={'prepurchase'} />
        <Card text={' دروس الإصلاح'} icon_svg={<Home_settings />} screen={'tutorialList'}/>

      </View>
      {/*Bottom Section */}
   
        <TouchableOpacity style={{ flex:Platform.OS==='ios'?1:1, width: '100%', height:Dimensions.get('screen').height*0.075,alignItems: 'center', }}
        onPress={()=>showAlert()}
        activeOpacity={0.7}
      >
        <View style={{ minWidth: '90%', height: '100%', backgroundColor: '#fff', zIndex: 10, borderRadius: 10,elevation:2,justifyContent:'center',paddingHorizontal:10}}>
        
        <Text style={{ fontSize: 14 }}>
              <Text style={{ fontSize: 12, color: '#8F8E8E' }}>
                What every vehicle should carry {'   '}
              </Text>
              ما يجب أن تحمله كل مركبة
            </Text>
 
        </View>
        <View style={{ height: 5, width: '100%', position: 'absolute', alignItems: 'center', justifyContent: 'center', top: '50%', zIndex: -1, backgroundColor: colors.prinamry }} />

      </TouchableOpacity>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
};

export default Home1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  paddingVertical:Dimensions.get('screen').height*0.04,
    width:Dimensions.get('screen').width

  },
});
