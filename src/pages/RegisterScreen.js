import React from 'react';
import {Formik} from 'formik';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../asset/color';
import Button from '../component/Button';
import Input from '../component/Input';
import * as yup from 'yup';
import auth from '@react-native-firebase/auth';
import {databaseRef} from '../config/firebase';

const Register = ({navigation}) => {
  const signUp = ({email, password, fullName, bio}) => {
    auth()
      .createUserWithEmailAndPassword(email, password, fullName, bio)
      .then(res => {
        const data = {
          fullName,
          bio,
          email,
          uid: res.user.uid,
        };
        databaseRef().ref(`users/${res.user.uid}/`).set(data);
        console.log('Register Succes !');
        navigation.navigate('LoginScreen')
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

  const signUpValidationSchema = yup.object().shape({
    fullName: yup
      .string()
      .matches(/(\w.+\s).+/, 'Enter at least 2 names')
      .required('Full name is required'),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email is required'),
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .matches(
        /[!@#$%^&*()\-_"=+{}; :,<.>]/,
        'Password must have a special character',
      )
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    bio: yup
      .string()
      .matches(/(\w.+\s).+/, 'Enter at least two words')
      .required('Bio is required'),
  });
  const windowHeight = Dimensions.get('window').height;
  return (
    <View style={{backgroundColor: 'white', height: windowHeight}}>
      <StatusBar barStyle="light-content" backgroundColor={colors.white} />
      <Formik
        initialValues={{fullName: '', email: '', password: '', bio: ''}}
        onSubmit={values => signUp(values)}
        validationSchema={signUpValidationSchema}>
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
              Make Your Account First Before Sign In !
            </Text>
            <Input
              placeHolder={'Fullname'}
              onChangeText={handleChange('fullName')}
              value={values.fullName}
            />
            {errors.fullName && (
              <Text style={styles.error}>{errors.fullName}</Text>
            )}
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
            <Input
              onChangeText={handleChange('bio')}
              value={values.bio}
              placeHolder={'Enter bio'}
            />
            {errors.bio && <Text style={styles.error}>{errors.bio}</Text>}
            <Button
              title={'Register'}
              onPress={handleSubmit}
              disabled={!isValid}
            />
            <TouchableOpacity
              style={styles.Text}
              onPress={() => navigation.navigate('RegisterScreen')}>
              <Text> Login </Text>
            </TouchableOpacity>
          </SafeAreaView>
        )}
      </Formik>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  error: {
    fontSize: 13,
    color: 'red',
    marginLeft: 50,
  },
  Text: {
    alignSelf: 'center',
    color: colors.button,
    fontWeight: 'bold',
  },
});
