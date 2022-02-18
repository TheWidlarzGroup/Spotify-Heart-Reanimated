import React from 'react'
import { Tarot } from '../screens/Tarot'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerRoutes } from './types/routes'
import { DrawerNavigatorParamList } from './types/paramList'
import { AnimatedCard } from '../screens/AnimatedCard/AnimatedCard'

export const RootNavigator = () => {
  const Drawer = createDrawerNavigator<DrawerNavigatorParamList>()

  return (
    <Drawer.Navigator screenOptions={{ header: () => null }}>
      <Drawer.Screen name={DrawerRoutes.TAROT} component={Tarot} />
      <Drawer.Screen name={DrawerRoutes.ANIMATEDCARD} component={AnimatedCard} />
    </Drawer.Navigator>
  )
}
