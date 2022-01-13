import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import PriceTab from '../../screens/PriceTab';
import MeasureTab from '../../screens/MeasureTab';
import { FontAwesome5 } from '@expo/vector-icons'
import i18n from '../../utils/textLanguages';
import { 
  BACKGROUND_COLOR_PRICES_SCREEN, 
  BACKGROUND_COLOR_CONVERT_SCREEN,
  BACKGROUND_COLOR_PRICES_SCREEN_HEADER, 
  BACKGROUND_COLOR_CONVERT_SCREEN_HEADER,
} from '../../utils/Constants'

const Tab = createMaterialTopTabNavigator()

const Tabs = () => {
    const insets = useSafeAreaInsets()
    return (
        <Tab.Navigator
          screenOptions={{ tabBarStyle : { marginBottom: insets.bottom }, tabBarShowIcon: true, tabBarStyle: { backgroundColor: '#FFCEBF' } }}
          tabBarPosition='bottom'
        >
          <Tab.Screen 
            name="Price" 
            component={PriceTab} 
            options={{
                tabBarLabel: i18n.t('price'),
                tabBarIcon: () => <FontAwesome5 name='dollar-sign' style={{textAlign: 'center'}} size={20}/>
            }}
            initialParams={{ backgroundColor: BACKGROUND_COLOR_PRICES_SCREEN, backgroundColorHeader: BACKGROUND_COLOR_PRICES_SCREEN_HEADER }}
          />
          <Tab.Screen 
            name="Convert" 
            component={MeasureTab} 
            options={{
                tabBarLabel: i18n.t('convert'),
                tabBarIcon: () => <FontAwesome5 name='sync' style={{textAlign: 'center'}} size={20}/>
            }}
            initialParams={{ backgroundColor: BACKGROUND_COLOR_CONVERT_SCREEN, backgroundColorHeader: BACKGROUND_COLOR_CONVERT_SCREEN_HEADER }}
          />
        </Tab.Navigator>
    );
};

export default Tabs;