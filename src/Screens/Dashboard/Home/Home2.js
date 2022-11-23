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
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>تشخيص مشاكل سيارتك</Text>
        <Text style={styles.heading}>ما نوع الأعراض التي تعانيها؟</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Op1')}>
          <Op1 width={screenWidth} height={screenHeight} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Op2')}>
          <Op2 width={screenWidth} height={screenHeight} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Op3')}>
          <Op3 width={screenWidth} height={screenHeight} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Op4')}>
          <Op4 width={screenWidth} height={screenHeight} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Op5')}>
          <Op5 width={screenWidth} height={screenHeight} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  title: {
    textAlign: 'center',
    right: '25%',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 40,
    color: colors.background,
  },
});
