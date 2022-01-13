import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'
//importing pages
import Tabs from './src/components/Tabs'

const Tab = createMaterialTopTabNavigator()

export default function App() {
  
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tabs/>
      </NavigationContainer>
    </SafeAreaProvider>
  )

}
