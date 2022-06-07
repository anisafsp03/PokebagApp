import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CodePush from 'react-native-code-push';
import LoginScreen from './src/pages/LoginScreen';
import RegisterScreen from './src/pages/RegisterScreen';

const Stack = createNativeStackNavigator();
const CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
  mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
  updateDialog: {
    // appendReleaseDescription: true,
    title: 'a new update is available!',
  },
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CodePush(CodePushOptions)(App);
