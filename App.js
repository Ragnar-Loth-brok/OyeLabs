import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './src/store/reducer';
import AuthScreen from './src/screens/AuthScreen';
import MainScreen from './src/screens/MainScreen';
import AddScreen from './src/screens/AddScreen';


const Stack = createStackNavigator();
const store = createStore(reducer);

function HomeScreen () {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Post' component={MainScreen} />
      <Stack.Screen name='Edit' component={AddScreen} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
      <Provider store={store} >
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name='Login' component={AuthScreen} />
            <Stack.Screen name='Home' component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  );
}