import { createStackNavigator } from '@react-navigation/stack'
//importing pages
import HomePrices from '../HomePrices';
import Quantity from '../Quantity';
import Measure from '../Measure';
import i18n from '../../utils/textLanguages'

const Stack = createStackNavigator()

export default function PriceTab(props) {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name='Home' 
          component={HomePrices} 
          options={{title:i18n.t('typeOfProduct').toUpperCase(), headerTitleAlign: 'center', headerStyle:{backgroundColor: props.route.params.backgroundColorHeader }}}
          initialParams={{ backgroundColor: props.route.params.backgroundColor }}
        />
        <Stack.Screen 
          name='Quantity' 
          component={Quantity} 
          options={{title:i18n.t('quantity'), headerStyle:{ backgroundColor: props.route.params.backgroundColorHeader }}}
          initialParams={{ backgroundColor: props.route.params.backgroundColor }}
        />
        <Stack.Screen 
          name='Weight' 
          component={Measure} 
          options={{title:i18n.t('weight'), headerStyle:{ backgroundColor: props.route.params.backgroundColorHeader }}}
          initialParams={{ backgroundColor: props.route.params.backgroundColor }}
        />
        <Stack.Screen 
          name='Distance' 
          component={Measure} 
          options={{title:i18n.t('distance'), headerStyle:{ backgroundColor: props.route.params.backgroundColorHeader }}}
          initialParams={{ backgroundColor: props.route.params.backgroundColor }}
        />
        <Stack.Screen 
          name='Liquid' 
          component={Measure} 
          options={{title:i18n.t('liquid'), headerStyle:{ backgroundColor: props.route.params.backgroundColorHeader }}}
          initialParams={{ backgroundColor: props.route.params.backgroundColor }}
        />
        <Stack.Screen 
          name='Area' 
          component={Measure} 
          options={{title:i18n.t('area'), headerStyle:{ backgroundColor: props.route.params.backgroundColorHeader }}}
          initialParams={{ backgroundColor: props.route.params.backgroundColor }}
        />
      </Stack.Navigator>
    
  );
}
