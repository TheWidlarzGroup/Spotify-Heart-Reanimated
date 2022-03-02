import React from 'react'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'

interface Props {
  isBgColored: any
  circleScale: any
  circleScale2: any
  circleOpacity: any
}

export const BouncingCircles = ({
  isBgColored,
  circleScale,
  circleScale2,
  circleOpacity,
}: Props) => {
  const scaleAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(circleOpacity.value, [0, 0.8], [0, 1])

    if (isBgColored) {
      return {
        transform: [{ scale: circleScale.value }],
        opacity: opacity,
      }
    } else {
      return {}
    }
  })

  const scaleAnimatedStyle2 = useAnimatedStyle(() => {
    const opacity = interpolate(circleOpacity.value, [0, 0.8], [0, 1])

    if (isBgColored) {
      return {
        transform: [{ scale: circleScale2.value }],
        opacity: opacity,
      }
    } else {
      return {}
    }
  })

  return (
    // <AnimatedViewContainer style={[scaleAnimatedStyle]}>
    //   <Svg width="200" height="200" viewBox="0 0 1552.131 1552.131">
    //     <AnimatedCircle
    //       stroke="white"
    //       strokeWidth="5"
    //       fill="transparent"
    //       animatedProps={animatedProps}
    //     />
    //   </Svg>
    // </AnimatedViewContainer>
    <>
      <Animated.View
        style={[
          {
            width: 50,
            height: 50,
            borderRadius: 25,
            borderWidth: 3,
            borderColor: '#1DB954',
            position: 'absolute',
            bottom: 43,
          },
          scaleAnimatedStyle,
        ]}
      />
      <Animated.View
        style={[
          {
            width: 50,
            height: 50,
            borderRadius: 25,
            borderWidth: 6,
            borderColor: '#1DB954',
            position: 'absolute',
            bottom: 43,
          },
          scaleAnimatedStyle2,
        ]}
      />
    </>
  )
}
