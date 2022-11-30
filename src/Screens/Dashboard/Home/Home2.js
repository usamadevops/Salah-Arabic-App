import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import Op1 from '../../../assets/images/ماذا ترى؟.svg';
import Op2 from '../../../assets/images/ماذا تسمع؟.svg';
import Op3 from '../../../assets/images/ما هي الرائحة.svg';
import Op4 from '../../../assets/images/ما هو شعورك؟.svg';
import Op5 from '../../../assets/images/لن تبدأ السيارة؟.svg';
import colors from '../../../Contants/colors';
const screenWidth = Dimensions.get('screen').width * 0.9;
const screenHeight = Dimensions.get('screen').height * 0.13;
const Home2 = ({ navigation }) => {
  return (
    <ScrollView style={{flex:1, backgroundColor:'#f5f5f5',}}>
              {/* <View style={{position:'absolute',width:250,height:250,borderRadius:200,backgroundColor:'#f5f5f5'}}/> */}

      <View style={styles.container}>
        <Text style={styles.title}>تشخيص مشاكل سيارتك</Text>
        <Text style={styles.heading}>ما نوع الأعراض التي تعانيها؟</Text>
        <TouchableOpacity onPress={() => navigation.navigate('eye')}>
          <Op1 width={screenWidth} height={screenHeight}  />
          <View style={{position:'absolute',top:Dimensions.get('screen').height*0.043,right:100}}>
          <Text style={{color:'#fff',fontSize:20}}>ماذا ترى؟</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('hear')}>
          <Op2 width={screenWidth} height={screenHeight} />
          <View style={{position:'absolute',top:Dimensions.get('screen').height*0.043,right:100}}>
          <Text style={{color:'#fff',fontSize:20}}> ماذا تسمع؟</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('smell')} >
          <Op3 width={screenWidth} height={screenHeight} />
          <View style={{position:'absolute',top:Dimensions.get('screen').height*0.033,width:Dimensions.get('screen').width*0.4,alignSelf:'center'}}>
          <Text style={{color:'#fff',fontSize:20}}>ما هي الرائحة التي تشمها؟</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('feel')}>
          <Op4 width={screenWidth} height={screenHeight} />
          <View style={{position:'absolute',top:Dimensions.get('screen').height*0.043,right:100,alignSelf:'center'}}>
          <Text style={{color:'#fff',fontSize:20}}>ما هو شعورك؟ </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('dontstart')}>
          <Op5 width={screenWidth} height={screenHeight} />
          <View style={{position:'absolute',top:Dimensions.get('screen').height*0.043,right:100,alignSelf:'center'}}>
          <Text style={{color:'#fff',fontSize:20}}> لن تبدأ السيارة؟</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingBottom:36,
    backgroundColor:'#f5f5f5'
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom:16,
    marginHorizontal:16
  },
  title: {
    textAlign: 'center',
    right: '15%',
    top:10,
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#8F8E8E50',
  },
});
