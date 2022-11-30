import { Text, View, Dimensions, FlatList, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { InspectionData } from '../../../data/Inspection'
import Slide from '../../../Components/Slide';
const { width, height } = Dimensions.get('screen');
export const Inspection = () => {
  const [currentSlideIndex, setcurrentSlideIndex] = React.useState(0);
  const ref = React.useRef(null);
  const Footer = () => {
    return (
      <View style={{  marginVertical: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly',  }}>
        <View style={{flex: 1,justifyContent:'flex-start',alignItems:'flex-end' }}>
          {
            currentSlideIndex != 0 ? (
              <Pressable onPress={() => PreviousSlide()} style={{padding:10}}
              android_ripple={{borderless:true,radius:30,color:'#c4c4c4'}}
              >
                <Text style={{color:'#000000'}}>السابق</Text>
              </Pressable>

            ) : <></>
          }
        </View>
        <View style={{ flexDirection: 'row', flex: 2, alignItems: 'center', justifyContent: 'center' }}>
          {
            InspectionData.map((_, index) => {
              return ( 
                <View key={index} style={{ width: 8, height: 8, backgroundColor: currentSlideIndex === index ? '#000' : '#c4c4c4', marginHorizontal: 4, borderRadius: 20 }} />
              )
            }
            )
          }
        </View>
        <View style={{ flex: 1,justifyContent:'flex-start',alignItems:'flex-start' }}>
          {currentSlideIndex !== InspectionData.length - 1 ?
            (
              <Pressable onPress={() => NextSlide()} style={{padding:10}}
              android_ripple={{borderless:true,radius:30,color:'#c4c4c4'}}
              >
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
    if (nextSlide !== InspectionData.length) {
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
      <FlatList data={InspectionData}
        onMomentumScrollEnd={(e) => updateCurrentIndex(e)}
        ref={ref}
        alwaysBounceHorizontal
        pinchGestureEnabled={true}
        snapToAlignment='center'
        pagingEnabled={true}
        overScrollMode="auto"
        nestedScrollEnabled={true}
        contentContainerStyle={{ height: height * 0.85, }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        renderItem={({ item }) => {
        return(
          
            <Slide item={item} />

        )
        }      
      }
      />
      <Footer />
    </SafeAreaView>

  )
}

