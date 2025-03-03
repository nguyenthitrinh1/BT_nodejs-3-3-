import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Splashscreen = () => (
  <View style={styles.container}>
        <Image source={require("./assets/images/Group 1.png")}  />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#006600",  // Đặt màu nền nếu cần
  },
 
});

export default Splashscreen;
