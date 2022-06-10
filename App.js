import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/pages/LoginScreen';
import RegisterScreen from './src/pages/RegisterScreen';
import {Provider} from 'react-redux';
import Home from './src/pages/Home';
import styles from './src/asset/styles';
import store from './src/store';
import Detail from './src/pages/Detail';
import React from 'react';
import CodePush from 'react-native-code-push';

const Stack = createNativeStackNavigator();
const CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
  mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
  updateDialog: {
    // appendReleaseDescription: true,
    title: 'a new update is available!',
  },
};


export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import React from 'react';
// import CodePush from 'react-native-code-push';
// import Home from './src/pages/Home';
// import LoginScreen from './src/pages/LoginScreen';
// import Register from './src/pages/RegisterScreen';

// const Stack = createNativeStackNavigator();
// const CodePushOptions = {
//   checkFrequency: CodePush.CheckFrequency.ON_APP_START,
//   mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
//   updateDialog: {
//     // appendReleaseDescription: true,
//     title: 'a new update is available!',
//   },
// };

// const App = () => {
//   function Main() {
//     return (
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Login"
//           component={LoginScreen}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="Register"
//           component={Register}
//           options={{headerShown: false}}
//         />

//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{headerShown: false}}
//         />
//       </Stack.Navigator>
//     );
//   }
//   return (
//     <NavigationContainer>
//       <Main />
//     </NavigationContainer>
//   );
// };

// export default CodePush(CodePushOptions)(App);
