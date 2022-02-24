import React from 'react'
import Svg, { Path, PathProps } from 'react-native-svg'
import Animated, { AnimateProps } from 'react-native-reanimated'

interface Props {
  width: number
  height: number
  zIndex: number
  animatedProps?: Partial<AnimateProps<PathProps>>
}

const AnimatedPath = Animated.createAnimatedComponent(Path)

export const Heart = ({ width, height, zIndex, animatedProps }: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="-20 -20 552.131 552.131"
      style={{
        position: 'absolute',
        zIndex: zIndex,
      }}>
      {animatedProps ? (
        <AnimatedPath
          animatedProps={animatedProps}
          stroke={'#7EDAB9'}
          strokeWidth={30}
          d="M511.489,167.372c-7.573-84.992-68.16-146.667-144.107-146.667c-44.395,0-85.483,20.928-112.427,55.488
			c-26.475-34.923-66.155-55.488-110.037-55.488c-75.691,0-136.171,61.312-144.043,145.856c-0.811,5.483-2.795,25.045,4.395,55.68
			C15.98,267.532,40.62,308.663,76.759,341.41l164.608,144.704c4.011,3.541,9.067,5.312,14.08,5.312
			c4.992,0,10.005-1.749,14.016-5.248L436.865,340.13c24.704-25.771,58.859-66.048,70.251-118.251
			C514.391,188.514,511.66,168.268,511.489,167.372z"
        />
      ) : (
        <AnimatedPath
          stroke={'#7EDAB9'}
          strokeWidth={30}
          d="M511.489,167.372c-7.573-84.992-68.16-146.667-144.107-146.667c-44.395,0-85.483,20.928-112.427,55.488
			c-26.475-34.923-66.155-55.488-110.037-55.488c-75.691,0-136.171,61.312-144.043,145.856c-0.811,5.483-2.795,25.045,4.395,55.68
			C15.98,267.532,40.62,308.663,76.759,341.41l164.608,144.704c4.011,3.541,9.067,5.312,14.08,5.312
			c4.992,0,10.005-1.749,14.016-5.248L436.865,340.13c24.704-25.771,58.859-66.048,70.251-118.251
			C514.391,188.514,511.66,168.268,511.489,167.372z"
        />
      )}
    </Svg>
  )
}
