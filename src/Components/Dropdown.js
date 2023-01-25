import React from 'react';
import { View, Text, Pressable, TouchableOpacity, ScrollView, Animated } from 'react-native';


function Dropdown({ label, setData, data, defaultval }) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(defaultval);
    const [items, setItems] = React.useState(data);

    return (
        <View style={{ paddingHorizontal: 20, zIndex: 100, }}>
            <Text style={{ fontSize: 16, color: '#383838', fontWeight: '600', marginVertical: 16 }}>
                {label}
            </Text>
            <TouchableOpacity style={{
                height: 64,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                padding: 10,
                backgroundColor: '#f5f5f5',
            }} onPress={() => setOpen(!open)}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16, }}>{value}</Text>
                </View>
                <View style={{ transform: [{ rotateX: '180deg' }] }}>
                    <Text style={{ fontWeight: '500' }}>∆</Text>
                </View>
            </TouchableOpacity>
            {open &&
                <ScrollView style={{ backgroundColor: '#f5f5f5', flexBasis: 1, position: 'absolute', alignSelf: 'center', height: open ? 300 : 0, width: '100%', borderRadius: 10, borderWidth: open ? 0.5 : 0, zIndex: 1000, elevation: 5, top: 120, overflow: 'hidden', }}
                    horizontal={false} nestedScrollEnabled scrollEnabled scrollToOverflowEnabled
                >
                    {
                        open && items.map((itemdata, index) => {
                            return (
                                <Pressable style={{ padding: 12 }}
                                    android_disableSound={false}
                                    android_ripple={{ borderless: false, color: '#c4c4c4', radius: 320 }}
                                    onPress={() => { setValue(itemdata.label); setOpen(!open); setData(itemdata.value) }} key={index}>
                                    <Text style={{ fontSize: 16 }}>{itemdata.label}</Text>
                                </Pressable>
                            )
                        })
                    }
                </ScrollView>
            }
        </View>
    );
}
export default Dropdown;