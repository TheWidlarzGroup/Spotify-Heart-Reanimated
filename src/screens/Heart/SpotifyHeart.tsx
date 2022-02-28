import React, { useRef, useState } from 'react'
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { Heart } from './components/Heart'
import { useMainHeartAnimation } from '../../hooks/useMainHeartAnimation'

export const SpotifyHeart = () => {
  const heartRef = useRef<Animated.View | null>(null)
  const [bgColor, setBgColor] = useState('white')
  const { animatedProps } = useMainHeartAnimation(bgColor)
  const heartAnimationValue = useSharedValue(0) //od 0 do 1

  const buttonWidth = useSharedValue(1)
  const cartCoords = useSharedValue({ x: 0, y: -700 })
  const heartCoords = useSharedValue({ x: 0, y: 0 })

  function setHeartPosition(x, y) {
    heartCoords.value = { x, y }
  }

  function calcBezier(interpolatedValue, p0, p1, p2) {
    'worklet'

    return Math.round(
      Math.pow(1 - interpolatedValue, 2) * p0 +
        2 * (1 - interpolatedValue) * interpolatedValue * p1 +
        Math.pow(interpolatedValue, 2) * p2
    )
  }

  const heartStyle = useAnimatedStyle(() => {
    const cart = cartCoords.value
    const ball = heartCoords.value

    const translateX = calcBezier(heartAnimationValue.value, ball.x, cart.x, cart.x)
    const translateY = calcBezier(heartAnimationValue.value, ball.y, ball.y, cart.y)

    return {
      transform: [{ translateX }, { translateY }],
    }
  })

  const handleHeartClick = () => {
    bgColor === 'white' ? setBgColor('color') : setBgColor('white')
    heartRef.current.measure((px, py) => {
      setHeartPosition(px, py)

      buttonWidth.value = withTiming(
        0,
        {
          duration: 300,
          easing: Easing.bezier(0.11, 0, 0.5, 0),
        },
        () => {
          heartAnimationValue.value = withTiming(1, {
            duration: 2900,
            easing: Easing.bezier(0.12, 0, 0.39, 0),
          })
        }
      )
    })
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
          ref={heartRef}
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
              width: 50,
              height: 50,
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              position: 'absolute',
              backgroundColor: 'pink',
              zIndex: 0,
            },
            heartStyle,
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
