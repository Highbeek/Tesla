import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const _layout = () => {
  return (
    <View style={styles.container}>
      <Stack screenOptions={{ headerShown: false }} />
      <StatusBar style="light" />
    </View>
  );
};

export default _layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
