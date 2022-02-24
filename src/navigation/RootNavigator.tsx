import React from 'react'
import { Tarot } from '../screens/Tarot'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerRoutes } from './types/routes'
import { DrawerNavigatorParamList } from './types/paramList'
import { AnimatedCard } from '../screens/AnimatedCard/AnimatedCard'
import { TextAnimation } from '../screens/TextAnimation/TextAnimation'
import { SpotifyHeart } from '../screens/Heart/SpotifyHeart'

export const RootNavigator = () => {
  const Drawer = createDrawerNavigator<DrawerNavigatorParamList>()

  return (
    <Drawer.Navigator screenOptions={{ header: () => null }}>
      {/*<Drawer.Screen name={DrawerRoutes.TAROT} component={Tarot} />*/}
      {/*<Drawer.Screen name={DrawerRoutes.ANIMATEDCARD} component={AnimatedCard} />*/}
      {/*<Drawer.Screen name={DrawerRoutes.STROKEANIMATION} component={TextAnimation} />*/}
      <Drawer.Screen name={DrawerRoutes.HEART} component={SpotifyHeart} />
    </Drawer.Navigator>
  )
}
