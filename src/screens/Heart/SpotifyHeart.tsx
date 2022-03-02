import React, { useRef, useState } from 'react'
import { useSharedValue } from 'react-native-reanimated'
import { HeartButton } from './components/HeartButton/HeartButton'
import { SingleFlyingHeart } from './components/SingleFlyingHeart/SingleFlyingHeart'
import { Container } from './SpotifyHeart.styled'
import { BouncingCircles } from './components/BouncingCircles/BouncingCircles'

export const SpotifyHeart = () => {
  const heartRef = useRef(null)
  const [isBgColored, setIsBgColored] = useState(false)
  const heartAnimation = useSharedValue(0) //od 0 do 1
  const circleScale = useSharedValue(0)
  const circleScale2 = useSharedValue(0)
  const circleOpacity = useSharedValue(1)
  const startCoords = useSharedValue({ x: 0, y: 0 })
  const heartRendersNumber = 3

  return (
    <Container>
      <HeartButton
        heartRef={heartRef}
        isBgColored={isBgColored}
        setIsBgColored={setIsBgColored}
        startCoords={startCoords}
        heartAnimation={heartAnimation}
        circleScale={circleScale}
        circleScale2={circleScale2}
        circleOpacity={circleOpacity}
      />
      {[...Array(heartRendersNumber)].map((_, index) => (
        <SingleFlyingHeart
          startCoords={startCoords}
          heartAnimation={heartAnimation}
          minValueX={50}
          maxValueX={100}
          index={index}
          heartRendersNumber={heartRendersNumber}
        />
      ))}
      {[...Array(heartRendersNumber)].map((_, index) => (
        <SingleFlyingHeart
          startCoords={startCoords}
          heartAnimation={heartAnimation}
          minValueX={-100}
          maxValueX={-50}
          index={index}
          heartRendersNumber={heartRendersNumber}
        />
      ))}
      <BouncingCircles
        circleScale={circleScale}
        circleScale2={circleScale2}
        isBgColored={isBgColored}
        circleOpacity={circleOpacity}
      />
    </Container>
  )
}
