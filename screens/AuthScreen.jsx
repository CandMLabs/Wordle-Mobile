import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';

const styles = StyleSheet.create({
  AuthContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  loginContainer: {
    width: 220,
    marginHorizontal: 50,
    marginVertical: 10,
  },
  buttonTitle: {
    fontWeight: '700'
  }
})

export default function AuthScreen() {
  return(
    <SafeAreaView style={styles.AuthContainer}>
      <Icon name='jedi-order' type='font-awesome-5' size={300} color='silver'/>
      <View>
        <Button
          icon={{name: 'google', type: 'font-awesome', color: '#ffff'}}
          title='Sign in with Google'
          titleStyle={styles.buttonTitle}
          buttonStyle={{ backgroundColor: 'rgba(214, 61, 57, 1)' }}
          containerStyle={styles.loginContainer}
        />
        <Button
          icon={{name: 'apple', type: 'font-awesome', color: '#ffff'}}
          title='Sign in with Apple'
          titleStyle={styles.buttonTitle}
          buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
          containerStyle={styles.loginContainer}
        />
        <Button
          icon={{name: 'facebook', type: 'font-awesome', color: '#ffff'}}
          title='Sign in with Facebook'
          titleStyle={styles.buttonTitle}
          containerStyle={styles.loginContainer}
        />
      </View>
    </SafeAreaView>
  )
}