import React, { useState } from 'react'
import { SafeAreaView, TouchableOpacity } from 'react-native'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { Heart } from './components/Heart'
import { useMainHeartAnimation } from '../../hooks/useMainHeartAnimation'

export const SpotifyHeart = () => {
  const [bgColor, setBgColor] = useState('white')
  const { animatedProps } = useMainHeartAnimation(bgColor)
  const y = useSharedValue(0)

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: y.value }],
  }))

  const handleHeartClick = () => {
    y.value = withTiming(-300, { duration: 2000, easing: Easing.elastic(3) })
    bgColor === 'white' ? setBgColor('color') : setBgColor('white')
    setTimeout(() => {
      y.value = withTiming(0, { duration: 400 })
    }, 4000)
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={handleHeartClick}
        activeOpacity={1}
        style={{
          width: 70,
          height: 70,
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Animated.View
          style={[
            {
              width: 70,
              height: 70,
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              position: 'absolute',
              zIndex: 1,
            },
          ]}>
          <Heart width={70} height={70} zIndex={1} animatedProps={animatedProps} />
        </Animated.View>
        <Animated.View
          style={[
            {
              width: 70,
              height: 70,
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              position: 'absolute',
              zIndex: 0,
            },
            animatedStyle,
          ]}>
          <Heart width={50} height={50} zIndex={0} />
          <Heart width={50} height={50} zIndex={0} />
          <Heart width={50} height={50} zIndex={0} />
          <Heart width={50} height={50} zIndex={0} />
          <Heart width={50} height={50} zIndex={0} />
          <Heart width={50} height={50} zIndex={0} />
        </Animated.View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
