import { DrawerRoutes } from './routes'

export type DrawerNavigatorParamList = {
  [DrawerRoutes.TAROT]: undefined
  [DrawerRoutes.ANIMATEDCARD]: undefined
  [DrawerRoutes.STROKEANIMATION]: undefined
  [DrawerRoutes.HEART]: undefined
}

export type AvailableRoutes = DrawerRoutes

export type AvailableParamLists = {
  drawer: DrawerNavigatorParamList
}
