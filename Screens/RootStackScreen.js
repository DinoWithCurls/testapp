import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Splash from './Splash';
import Login from './Login';
import Register from './Register';
import Final from './Final';
import ScreenUno from './ScreenUno';
import ScreenDos from './ScreenDos';
import { NavigationContainer } from '@react-navigation/native';
const RootStack = createStackNavigator();
const DrawStack = createDrawerNavigator();
const Drawer = () => {
    return (
        <DrawStack.Navigator>
            <DrawStack.Screen name="Final" component={Final} />
            <DrawStack.Screen name="ScreenUno" component={ScreenUno} />
            <DrawStack.Screen name="ScreenDos" component={ScreenDos} />
        </DrawStack.Navigator>
    );
}
const RootStackScreen = ({navigation}) => (
    <NavigationContainer>
        <RootStack.Navigator headerMode='none'>
            <RootStack.Screen name="Splash" component={Splash} />
            <RootStack.Screen name="Login" component={Login} />
            <RootStack.Screen name="Register" component={Register} />
            <RootStack.Screen name="Drawer" component={Drawer} />
        </RootStack.Navigator>
    </NavigationContainer>
);
export default RootStackScreen;