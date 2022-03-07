import React, { useState } from 'react'
import { useSharedValue } from 'react-native-reanimated'
import { HeartButton } from './components/HeartButton/HeartButton'
import { Container } from './SpotifyHeart.styled'
import { BouncingCircles } from './components/BouncingCircles/BouncingCircles'
import { FlyingHeartsRenderer } from './components/FlyingHeartsRenderer/FlyingHeartsRenderer'
import { Coords } from '../../types/types'

export const SpotifyHeart = () => {
  const [isBgColored, setIsBgColored] = useState<boolean>(false)
  const heartAnimation = useSharedValue<number>(0)
  const startCoords = useSharedValue<Coords>({ x: 0, y: 0 })

  return (
    <Container>
      <HeartButton
        isBgColored={isBgColored}
        setIsBgColored={setIsBgColored}
        heartAnimation={heartAnimation}
      />
      <FlyingHeartsRenderer startCoords={startCoords} heartAnimation={heartAnimation} />
      <BouncingCircles heartAnimation={heartAnimation} isBgColored={isBgColored} />

    </Container>
  )
}
