import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';
import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {colors} from '../asset/color';
import Button from '../component/Button';
import Input from '../component/Input';
import * as yup from 'yup';

const LoginScreen = () => {
  const signIn = ({email, password}) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('login succes');
        // navigation.navigate('Dashboard')
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

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={values => signIn(values)}
      validationSchema={loginValidationSchema}>
      {({handleChange, handleSubmit, errors, isValid, values}) => (
        <SafeAreaView>
          <Text
            style={{
              marginTop: 90,
              marginLeft: 40,
              marginBottom: 70,
              fontWeight: 'bold',
              color: colors.green,
              fontSize: 18,
            }}>
            Welcome To PokebagApp !
          </Text>
          <Input
            placeHolder={'Username'}
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
          <Button title={'Login'} onPress={handleSubmit} disabled={!isValid} />
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  error: {
    fontSize: 13,
    color: 'red',
    marginLeft: 50,
  },
});
