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
        <TouchableOpacity onPress={() => navigation.navigate('See')}>
          <Op1 width={screenWidth} height={screenHeight}  />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Hear')}>
          <Op2 width={screenWidth} height={screenHeight} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Smell')}>
          <Op3 width={screenWidth} height={screenHeight} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Feel')}>
          <Op4 width={screenWidth} height={screenHeight} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DontStart')}>
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
