import React from 'react'
import { SingleFlyingHeart } from '../SingleFlyingHeart/SingleFlyingHeart'

interface Props {
  startCoords: any
  heartAnimation: any
}

export const FlyingHeartsRenderer = ({ startCoords, heartAnimation }: Props) => {
  const heartRendersNumber = 2
  return (
    <>
      <SingleFlyingHeart
        startCoords={startCoords}
        heartAnimation={heartAnimation}
        minValueX={110}
        maxValueX={120}
        heartRendersNumber={1}
      />
      {[...Array(heartRendersNumber)].map((_, index) => (
        <SingleFlyingHeart
          startCoords={startCoords}
          heartAnimation={heartAnimation}
          minValueX={70}
          maxValueX={100}
          index={index}
          heartRendersNumber={heartRendersNumber}
        />
      ))}
      <SingleFlyingHeart
        startCoords={startCoords}
        heartAnimation={heartAnimation}
        minValueX={60}
        maxValueX={60}
        heartRendersNumber={1}
      />
      <SingleFlyingHeart
        startCoords={startCoords}
        heartAnimation={heartAnimation}
        minValueX={-120}
        maxValueX={-110}
        heartRendersNumber={1}
      />
      {[...Array(heartRendersNumber)].map((_, index) => (
        <SingleFlyingHeart
          startCoords={startCoords}
          heartAnimation={heartAnimation}
          minValueX={-100}
          maxValueX={-70}
          index={index}
          heartRendersNumber={heartRendersNumber}
        />
      ))}
      <SingleFlyingHeart
        startCoords={startCoords}
        heartAnimation={heartAnimation}
        minValueX={-60}
        maxValueX={-60}
        heartRendersNumber={1}
      />
    </>
  )
}
