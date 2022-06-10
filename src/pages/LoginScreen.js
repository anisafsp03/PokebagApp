import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';
import {SafeAreaView, Text, StyleSheet, TouchableOpacity, View, StatusBar, Dimensions} from 'react-native';
import {colors} from '../asset/color';
import Button from '../component/Button';
import Input from '../component/Input';
import * as yup from 'yup';
import {databaseRef} from '../config/firebase';
import React from 'react';
const LoginScreen = ({navigation}) => {
  const signIn = ({email, password}) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        databaseRef().ref(`users/${res.user.uid}/`)
        .once('value')
          .then((resDB) => {
            // console.log('data user : ', resDB.val());
            if (resDB.val()) {
              // storeData('user', resDB.val());
              // navigation.replace('Home');
             console.log('login succes')
            }
          });
        navigation.navigate('Home');
       
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(6, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });
  const windowHeight = Dimensions.get('window').height;
  return (
    <View style={{backgroundColor:'white', height: windowHeight }}>
        <StatusBar
            barStyle="light-content"
            backgroundColor={colors.white}
          />
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => signIn(values)}
        validationSchema={loginValidationSchema}>
        {({handleChange, handleSubmit, errors, isValid, values}) => (
          <SafeAreaView>
            <Text
              style={{
                marginTop: 90,
                alignSelf: 'center',
                marginBottom: 70,
                fontWeight: 'bold',
                color: colors.green,
                fontSize: 18,
              }}>
              Welcome To PokebagApp !
            </Text>
            <Input
              placeHolder={'Email'}
              onChangeText={handleChange('email')}
              value={values.email}
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}
            <Input
              onChangeText={handleChange('password')}
              value={values.password}
              placeHolder={'Password'}
            />
            {errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <Button
              title={'Login'}
              onPress={handleSubmit}
              disabled={!isValid}
            />
            <Text style={{alignSelf: 'center'}}>
              {' '}
              Don&lsquo;t have an account?{' '}
            </Text>
            <TouchableOpacity
              style={styles.RegisterText}
              onPress={() => navigation.navigate('RegisterScreen')}>
              <Text> Register </Text>
            </TouchableOpacity>
          </SafeAreaView>
        )}
      </Formik>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  error: {
    fontSize: 13,
    color: 'red',
    marginLeft: 50,
  },
  RegisterText: {
    alignSelf: 'center',
    color: colors.green,
    fontWeight: 'bold',
  },
});
