import { AvailableParamLists } from 'Navigation/types/paramList'
import { NavigationProp, RouteProp } from '@react-navigation/core/lib/typescript/src/types'

declare module '@react-navigation/native' {
  export function useNavigation<T extends keyof AvailableParamLists>(): NavigationProp<
    AvailableParamLists[T]
  >

  export function useRoute<
    Navigator extends keyof AvailableParamLists,
    Screen extends keyof AvailableParamLists[Navigator]
  >(): RouteProp<AvailableParamLists[Navigator], Screen>
}
