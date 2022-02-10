import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default function HomeScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Welcome to the App!</Text>
    </View>
  )
}