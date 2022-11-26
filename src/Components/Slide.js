import { View, Text, Dimensions } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get('window');

const Slide = ({ item }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#FEFDFD', width: width, paddingHorizontal: 24,alignItems:'center',paddingVertical:16 }}>
            <View >
                {item.pic}
            </View>
            <View style={{ marginTop: 36 }}>
                <Text style={{ fontFamily: 'futura', fontSize: 24, fontWeight: 'bold' }}>
                    {item.heading}
                </Text>
                <Text style={{ fontFamily: 'futura', fontSize: 14, fontWeight: '200', marginTop: 16, lineHeight: 24,  }} textBreakStrategy="balanced">
                    {item.sentence1}
                </Text>
                {item.sentence2 !== '' &&
                    <View>
                        <Text style={{ fontFamily: 'futura', fontSize: 14, fontWeight: '300', marginTop: 16, lineHeight: 24 }}>
                            {item.sentence2}
                        </Text>
                    </View>
                }

            </View>
        </View>
    )
}

export default Slide