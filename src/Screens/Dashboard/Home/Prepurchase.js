import { StyleSheet, Text, View, Dimensions, FlatList, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { PrepurchaseData } from '../../../data/PrePurchase.js'
import Slide from '../../../Components/Slide';
const { width, height } = Dimensions.get('screen');
export const Prepurchase = () => {
  const [currentSlideIndex, setcurrentSlideIndex] = React.useState(0);
  const ref = React.useRef(null);
  const Footer = () => {
    return (
      <View style={{ flex: 1, marginBottom: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 20 }}>
        <View style={{flex: 1 }}>
          {
            currentSlideIndex != 0 ? (
              <Pressable onPress={() => PreviousSlide()}>
                <Text style={{color:'#000000'}}>السابق</Text>
              </Pressable>

            ) : <></>
          }
        </View>
        <View style={{ flexDirection: 'row', flex: 3, alignItems: 'center', justifyContent: 'center' }}>
          {
            PrepurchaseData.map((_, index) => {
              return ( 
                <View key={index} style={{ width: 8, height: 8, backgroundColor: currentSlideIndex === index ? '#000' : '#c4c4c4', marginHorizontal: 4, borderRadius: 20 }} />
              )
            }
            )
          }
        </View>
        <View style={{ flex: 1 }}>
          {currentSlideIndex !== PrepurchaseData.length - 1 ?
            (
              <Pressable onPress={() => NextSlide()}>
                <Text style={{color:'#000'}}>التالي</Text>
              </Pressable>
            ) : (
              <></>
            )
          }
        </View>
      </View>
    );
  }
  const updateCurrentIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setcurrentSlideIndex(currentIndex)
  }
  const NextSlide = () => {
    const nextSlide = currentSlideIndex + 1;
    if (nextSlide !== PrepurchaseData.length) {
      const offset = nextSlide * width;
      ref?.current?.scrollToOffset({ offset });
      setcurrentSlideIndex(nextSlide);
    }
  }
  const PreviousSlide = () => {
    if (currentSlideIndex != 0) {
      const pslide = currentSlideIndex - 1;
      setcurrentSlideIndex(pslide);
      const offset = pslide * width;
      ref?.current?.scrollToOffset({ offset });
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FEFDFD' }}>
      <FlatList data={PrepurchaseData}
        onMomentumScrollEnd={(e) => updateCurrentIndex(e)}
        ref={ref}
        alwaysBounceHorizontal
        snapToAlignment='center'
        pagingEnabled={true}
        overScrollMode="auto"
        contentContainerStyle={{ height: height * 0.85, }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} 
        />
      }
      />
      <Footer />
    </SafeAreaView>
  )
}

