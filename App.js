import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
//importing pages
import Home from './src/screens/Home';
import Quantity from './src/screens/Quantity';
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
