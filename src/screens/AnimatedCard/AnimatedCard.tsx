import React from 'react'
import { StyledContainer } from './AnimatedCard.styled'
import { Dimensions, Image, StyleSheet } from 'react-native'
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { snapPoint } from 'react-native-redash'

const { width: screenWidth } = Dimensions.get('window')

const CARD_WIDTH = screenWidth - 128
const side = (screenWidth - CARD_WIDTH) / 2
// SNAP_POINTS - wyznaczamy punkty zatrzymania karty w osi (w tym przypadku osi X)
// arrajka to - [odległość od środka na lewo, środek, odległość od środka na prawo] - tutaj podajemy 3 punkty, ale może ich być dowolna ilość,
// a środek może być wyznaczony w dowolnym punkcie
const SNAP_POINTS = [-side, 0, side]
const aspectRatio = 722 / 368
const CARD_HEIGHT = CARD_WIDTH * aspectRatio
const IMAGE_WIDTH = CARD_WIDTH * 0.9

export const AnimatedCard = () => {
  // pozycja obiektu w osi X
  const x = useSharedValue(0)
  // pozycja obiektu w osi Y
  const y = useSharedValue(0)

  const onGestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { x: number; y: number }
  >({
    // onStart czyli przed każdym kolejnym poruszeniem, określamy pozycję startową na tą na której aktualnie znajduje się obiekt,
    // teoretycznie jeśli tego nie ustawimy, obiekt powinien zawsze startować z pozycji wyjściowej (initial value w sharedValue), czyliw  momencie kliknięcia na niego, uciekać do środka
    // u mnie się tak nie działo, nie wiem czemu ale oki
    onStart: (_, ctx) => {
      ctx.x = x.value
      ctx.y = y.value
    },
    // w funkcji poniżej odczytujemy wartość położenia palca-myszy na ekranie telefonu i przekazujemy ją do shared values x i y
    // onActive - czyli dzieje się to w momencie poruszania
    onActive: ({ translationX, translationY }, ctx) => {
      x.value = ctx.x + translationX
      y.value = ctx.y + translationY
    },
    onEnd: ({ velocityX, velocityY }) => {
      // ustalamy dest - czyli miejsce docelowe poprzez przekazując do funkcji snapPoint (jest odpowiedzialna za wyznaczenie miejsca docelowego)
      // najpierw aktualnej pozycji palca-myszki, prędkości pobranejz  funkcji, oraz wcześniej przygotowanych punktów docelowych
      const dest = snapPoint(x.value, velocityX, SNAP_POINTS)
      x.value = withSpring(dest, { velocity: velocityX })
      y.value = withSpring(0, { velocity: velocityY })
    },
  })

  // w funkcji poniżej przekazujemy aktualne wartości x i y do funkcji transform, która aktualizuje pozycje w pionie i poziomie. Dalej przekazujemy je do Animated.View które odpowiednio je odczytuje
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: x.value }, { translateY: y.value }],
  }))

  return (
    <StyledContainer>
      <PanGestureHandler onGestureEvent={onGestureHandler}>
        <Animated.View style={[styles.card, animatedStyle]}>
          <Image
            source={require('../../assets/chariot.png')}
            style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
            resizeMode={'contain'}
          />
        </Animated.View>
      </PanGestureHandler>
    </StyledContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
})
