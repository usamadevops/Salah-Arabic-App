/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

{/* <TouchableOpacity onPress={()=>navigation.navigate('Home2Stack')}>
 <Text>Home2</Text>
</TouchableOpacity> */}
const Home1 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
     {/* Upper Section */}
     <View>
     </View>
     {/* middle Section */}
     <View>
     </View>
     {/* After middle Section */}
     <View>
     </View>
     {/*Bottom Section */}
     <View>
     </View>
    </SafeAreaView>
  );
};

export default Home1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
