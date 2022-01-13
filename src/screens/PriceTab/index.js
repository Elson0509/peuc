import { createStackNavigator } from '@react-navigation/stack'
//importing pages
import Home from '../Home';
import Quantity from '../Quantity';
import Measure from '../Measure';
import i18n from '../../utils/textLanguages'

const Stack = createStackNavigator()

export default function PriceTab() {
  return (
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
    
  );
}
