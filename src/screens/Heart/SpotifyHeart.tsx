import React, { useState } from 'react'
import { useSharedValue } from 'react-native-reanimated'
import { HeartButton } from './components/HeartButton/HeartButton'
import { Container } from './SpotifyHeart.styled'
import { BouncingCircles } from './components/BouncingCircles/BouncingCircles'
import { FlyingHeartsRenderer } from './components/FlyingHeartsRenderer/FlyingHeartsRenderer'

export const SpotifyHeart = () => {
  const [isBgColored, setIsBgColored] = useState(false)
  const heartAnimation = useSharedValue(0) //od 0 do 1
  const bigCircleScale = useSharedValue(0)
  const smallCircleScale = useSharedValue(0)
  const circleOpacity = useSharedValue(1)
  const startCoords = useSharedValue({ x: 0, y: 0 })

  return (
    <Container>
      <HeartButton
        isBgColored={isBgColored}
        setIsBgColored={setIsBgColored}
        startCoords={startCoords}
        heartAnimation={heartAnimation}
        bigCircleScale={bigCircleScale}
        smallCircleScale={smallCircleScale}
        circleOpacity={circleOpacity}
      />
      <FlyingHeartsRenderer startCoords={startCoords} heartAnimation={heartAnimation} />
      <BouncingCircles
        bigCircleScale={bigCircleScale}
        smallCircleScale={smallCircleScale}
        isBgColored={isBgColored}
        circleOpacity={circleOpacity}
      />
    </Container>
  )
}
