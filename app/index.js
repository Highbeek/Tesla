import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Car from "../assets/images/car.png";
import menuOptions from "../assets/menuOptions";
import {
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { Link } from "expo-router";

import MenuItem from "../app/components/MenuItem";

const Controls = () => {
  return (
    <>
    

      <View style={styles.controls}>
        <Entypo name="lock" size={26} color="gray" />
        <MaterialCommunityIcons name="fan" size={26} color="gray" />
        <FontAwesome5 name="bolt" size={26} color="gray" />
        <Ionicons name="car-sport-sharp" size={26} color="gray" />
      </View>
    </>
  );
};

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My model S</Text>
          <Text style={styles.subtitle}>Parked</Text>
        </View>
        <FontAwesome name="user-circle" size={38} color="gray" />
      </View>

      
      <Image source={Car} style={styles.image} resizeMode="contain" />
      {/* <Controls /> */}

      <FlatList
        data={menuOptions}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <MenuItem item={item} />}
        ListHeaderComponent={Controls}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#161818",
  },
  header: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    color: "#eee",
    fontWeight: "bold",
  },
  subtitle: {
    color: "gray",
    fontWeight: "500",
  },
  image: {
    width: "100%",
    height: 300,
  },
  controls: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
  },
  optionRow: {
    flexDirection: "row",
    marginVertical: 20,
    alignItems: "center",
  },
  optionText: {
    color: "#eee",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
export default Home;
