import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Dropdown from '../../Components/Dropdown';
import DatePicker from 'react-native-date-picker';
import { Vehicles, Model } from '../../data/DropdownMock';
import colors from '../../Contants/colors';
const CarDropdown = ({navigation}) => {
  const [veh, setveh] = React.useState(''); 
  const [vehmodal, setvehmodal] = React.useState('');
  const today = new Date();
  const [date, setDate] = React.useState(new Date())
  const [Dateselected, setselected] = React.useState(false);
  const [open, setOpen] = React.useState(false)
  return (
    <View style={{ flex: 1, backgroundColor: "#fff",paddingTop:40 }}>
      <View style={{ zIndex: 1000 }}>
        <Dropdown data={Vehicles} setData={setveh} defaultval={'Select your Car '} label={'Select Car'} />
      </View>
      <Dropdown data={Model} setData={setvehmodal} defaultval={'Select your Car Model'} label={'Select Model'} />
      <View style={{ marginTop: 10, marginHorizontal: 20 }}>
        <Text style={{ fontSize: 16, color: '#383838', fontWeight: '600' }}>
          Select Year
        </Text>
      </View>
      <TouchableOpacity style={{
        height: 64,
        paddingHorizontal: 20,
        margin: 20,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 10,
        backgroundColor: '#f5f5f5',
      }} onPress={() => setOpen(!open)}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, }}>{!Dateselected ? 'Select Year' : date.getFullYear()} </Text>
        </View>


        <View style={{ transform: [{ rotateX: '180deg' }] }}>
          <Text style={{ fontWeight: '500' }}>∆</Text>
        </View>
      </TouchableOpacity>
      <DatePicker
        modal
        mode='date'
        open={open}
        date={date}
        maximumDate={today}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
          setselected(true)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      <View style={{position:'relative',elevation:2,margin:20,flexDirection:'row'}}>
        <TouchableOpacity
        activeOpacity={0.7}
          style={{ marginVertical: 10, backgroundColor: '#f5f5f5', width: Dimensions.get('screen').width * 0.4, height: Dimensions.get('screen').height * 0.065, alignItems: 'center', justifyContent: 'center', borderRadius: 40,elevation:2,marginHorizontal:10 }}
          onPress={() => navigation.pop()}
        >
          <Text style={{ color: '#080808', fontSize: 16,fontWeight:'bold' }}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={0.7}
          style={{ marginVertical: 10, backgroundColor: colors.prinamry, width: Dimensions.get('screen').width * 0.4, height: Dimensions.get('screen').height * 0.065, alignItems: 'center', justifyContent: 'center', borderRadius: 40,elevation:2,marginHorizontal:10 }}
          onPress={() => {
            if(Dateselected && veh!=='' && vehmodal!=='')
          {  navigation.navigate('Home1',{
            car:veh,
            model:vehmodal,
            year:date.getFullYear()
          })}
        }
        }
        >
          <Text style={{ color: colors.secondary, fontSize: 16,fontWeight:'bold' }}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CarDropdown

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 16,
    fontSize: 20,
    color: '#000'
  }

})