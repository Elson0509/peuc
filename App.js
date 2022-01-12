import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
//importing pages
import Home from './src/screens/Home';
import Quantity from './src/screens/Quantity';
import Measure from './src/screens/Measure';
import i18n from './src/utils/textLanguages';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home' 
          component={Home} 
          options={{title:i18n.t('typeOfProduct'), headerTitleAlign: 'center', headerStyle:{backgroundColor: '#eee'}}}
          
        />
        <Stack.Screen 
          name='Quantity' 
          component={Quantity} 
          options={{title:i18n.t('quantity')}}
        />
        <Stack.Screen 
          name='Weight' 
          component={Measure} 
          options={{title:i18n.t('weight')}}
        />
        <Stack.Screen 
          name='Distance' 
          component={Measure} 
          options={{title:i18n.t('distance')}}
        />
        <Stack.Screen 
          name='Liquid' 
          component={Measure} 
          options={{title:i18n.t('liquid')}}
        />
        <Stack.Screen 
          name='Area' 
          component={Measure} 
          options={{title:i18n.t('area')}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
