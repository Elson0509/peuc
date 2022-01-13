import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import PriceTab from '../../screens/PriceTab';
import { FontAwesome5 } from '@expo/vector-icons'
import i18n from '../../utils/textLanguages';

const Tab = createMaterialTopTabNavigator()

const Tabs = () => {
    const insets = useSafeAreaInsets()
    return (
        <Tab.Navigator
          screenOptions={{ tabBarStyle : { marginBottom: insets.bottom }, tabBarShowIcon: true }}
          tabBarPosition='bottom'
          backBehavior='initialRoute'
        >
          <Tab.Screen 
            name="Price" 
            component={PriceTab} 
            options={{
                tabBarLabel: i18n.t('price'),
                tabBarIcon: () => <FontAwesome5 name='dollar-sign' style={{textAlign: 'center'}} size={20}/>
            }}
          />
          <Tab.Screen 
            name="Convert" 
            component={PriceTab} 
            options={{
                tabBarLabel: i18n.t('convert'),
                tabBarIcon: () => <FontAwesome5 name='sync' style={{textAlign: 'center'}} size={20}/>
            }}
          />
        </Tab.Navigator>
    );
};

export default Tabs;