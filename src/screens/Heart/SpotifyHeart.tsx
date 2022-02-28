import React, { useRef, useState } from 'react'
import { useSharedValue } from 'react-native-reanimated'
import { HeartButton } from './components/HeartButton/HeartButton'
import { SingleFlyingHeart } from './components/SingleFlyingHeart/SingleFlyingHeart'
import { Container } from './SpotifyHeart.styled'

export const SpotifyHeart = () => {
  const heartRef = useRef(null)
  const [isBgColored, setIsBgColored] = useState(false)
  const heartAnimation = useSharedValue(0) //od 0 do 1
  const startCoords = useSharedValue({ x: 0, y: 0 })
  const heartRenders = 40

  return (
    <Container>
      <HeartButton
        heartRef={heartRef}
        isBgColored={isBgColored}
        setIsBgColored={setIsBgColored}
        startCoords={startCoords}
        heartAnimation={heartAnimation}
      />
      {[...Array(heartRenders)].map((_, index) => (
        <SingleFlyingHeart
          startCoords={startCoords}
          heartAnimation={heartAnimation}
        />
      ))}
    </Container>
  )
}
