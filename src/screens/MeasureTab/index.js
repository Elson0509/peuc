import { createStackNavigator } from '@react-navigation/stack'
//importing pages
import HomeMeasure from '../HomeMeasure';
import Convert from '../Convert';
import Measure from '../Measure';
import i18n from '../../utils/textLanguages'

const Stack = createStackNavigator()

export default function MeasureTab(props) {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name='Home' 
          component={HomeMeasure} 
          options={{title:i18n.t('typeOfMeasure').toUpperCase(), headerTitleAlign: 'center', headerStyle:{ backgroundColor: props.route.params.backgroundColorHeader }}}
          initialParams={{ backgroundColor: props.route.params.backgroundColor }}
        />
        <Stack.Screen 
          name='Weight' 
          component={Convert} 
          options={{title:i18n.t('weight'), headerStyle:{ backgroundColor: props.route.params.backgroundColorHeader }}}
          initialParams={{ backgroundColor: props.route.params.backgroundColor }}
        />
        <Stack.Screen 
          name='Distance' 
          component={Convert} 
          options={{title:i18n.t('distance'), headerStyle:{ backgroundColor: props.route.params.backgroundColorHeader }}}
          initialParams={{ backgroundColor: props.route.params.backgroundColor }}
        />
        <Stack.Screen 
          name='Liquid' 
          component={Convert} 
          options={{title:i18n.t('liquid'), headerStyle:{ backgroundColor: props.route.params.backgroundColorHeader }}}
          initialParams={{ backgroundColor: props.route.params.backgroundColor }}
        />
        <Stack.Screen 
          name='Area' 
          component={Convert} 
          options={{title:i18n.t('area'), headerStyle:{ backgroundColor: props.route.params.backgroundColorHeader }}}
          initialParams={{ backgroundColor: props.route.params.backgroundColor }}
        />
        <Stack.Screen 
          name='DataTransfer' 
          component={Convert} 
          options={{title:i18n.t('dataTransfer'), headerStyle:{ backgroundColor: props.route.params.backgroundColorHeader }}}
          initialParams={{ backgroundColor: props.route.params.backgroundColor }}
        />
        <Stack.Screen 
          name='Storage' 
          component={Convert} 
          options={{title:i18n.t('storage'), headerStyle:{ backgroundColor: props.route.params.backgroundColorHeader }}}
          initialParams={{ backgroundColor: props.route.params.backgroundColor }}
        />
        <Stack.Screen 
          name='Energy' 
          component={Convert} 
          options={{title:i18n.t('energy'), headerStyle:{ backgroundColor: props.route.params.backgroundColorHeader }}}
          initialParams={{ backgroundColor: props.route.params.backgroundColor }}
        />
        <Stack.Screen 
          name='Frequency' 
          component={Convert} 
          options={{title:i18n.t('frequency'), headerStyle:{ backgroundColor: props.route.params.backgroundColorHeader }}}
          initialParams={{ backgroundColor: props.route.params.backgroundColor }}
        />
        <Stack.Screen 
          name='Fuel' 
          component={Convert} 
          options={{title:i18n.t('fuel'), headerStyle:{ backgroundColor: props.route.params.backgroundColorHeader }}}
          initialParams={{ backgroundColor: props.route.params.backgroundColor }}
        />
        <Stack.Screen 
          name='Angle' 
          component={Convert} 
          options={{title:i18n.t('angle'), headerStyle:{ backgroundColor: props.route.params.backgroundColorHeader }}}
          initialParams={{ backgroundColor: props.route.params.backgroundColor, resultDecimalPlaces: 5 }}
        />
        <Stack.Screen 
          name='Pressure' 
          component={Convert} 
          options={{title:i18n.t('pressure'), headerStyle:{ backgroundColor: props.route.params.backgroundColorHeader }}}
          initialParams={{ backgroundColor: props.route.params.backgroundColor, resultDecimalPlaces: 5 }}
        />
        <Stack.Screen 
          name='Speed' 
          component={Convert} 
          options={{title:i18n.t('speed'), headerStyle:{ backgroundColor: props.route.params.backgroundColorHeader }}}
          initialParams={{ backgroundColor: props.route.params.backgroundColor }}
        />
        <Stack.Screen 
          name='Time' 
          component={Convert} 
          options={{title:i18n.t('time'), headerStyle:{ backgroundColor: props.route.params.backgroundColorHeader }}}
          initialParams={{ backgroundColor: props.route.params.backgroundColor, resultDecimalPlaces: 5 }}
        />
        <Stack.Screen 
          name='Temperature' 
          component={Convert} 
          options={{title:i18n.t('temperature'), headerStyle:{ backgroundColor: props.route.params.backgroundColorHeader }}}
          initialParams={{ backgroundColor: props.route.params.backgroundColor }}
        />
      </Stack.Navigator>
    
  );
}
