import { Formik } from 'formik';
import { Button, React, TextInput, View } from 'react-native';

const LoginScreen = () => {
  return (
    <Formik
      initialValues={{email: ''}}
      onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View>
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  );
};

export default LoginScreen;

// const styles = StyleSheet.create({});
