import React, { useRef, useState } from 'react'
import { Path } from 'react-native-svg'
import Animated, { Easing, useAnimatedProps } from 'react-native-reanimated'

interface Props {
  d: string
  progress: Animated.SharedValue<number>
}

const AnimatedPath = Animated.createAnimatedComponent(Path)
const colors = ['#FFC27A', '#7EDAB9', '#45A6E5', '#FE8777']

export const AnimatedStroke = ({ d, progress }: Props) => {
  const randomColor = colors[Math.round(Math.random() * colors.length - 1)]
  const [length, setLength] = useState(0)
  const ref = useRef<typeof AnimatedPath>(0)
  const strokeAnimation = useAnimatedProps(() => ({
    strokeDashoffset: length - length * Easing.bezier(0.65, 0, 0.35, 1).factory()(progress.value),
  }))

  const bgStrokeAnimation = useAnimatedProps(() => ({
    strokeDashoffset: length - length * Easing.bezier(0.61, 1, 0.88, 1).factory()(progress.value),
    fillOpacity: progress.value,
  }))

  return (
    <>
      <AnimatedPath
        animatedProps={bgStrokeAnimation}
        d={d}
        stroke={randomColor}
        strokeWidth={6}
        strokeDasharray={length}
      />
      <AnimatedPath
        animatedProps={strokeAnimation}
        onLayout={() => setLength(ref?.current?.getTotalLength())}
        d={d}
        stroke={'black'}
        strokeWidth={6}
        strokeDasharray={length}
        strokeDashoffset={length / 2}
        ref={ref}
      />
    </>
  )
}
