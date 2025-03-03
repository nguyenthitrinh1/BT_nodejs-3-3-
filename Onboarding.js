import React from "react";
import { ImageBackground, Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Onboarding = () => {
  return (
    <ImageBackground 
      source={require("./assets/images/8140-1.png")} 
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image 
          source={require("./assets/images/Group.png")} 
          style={styles.logo}
        />
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.title}>to our store</Text>
        <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>

        {/* Sử dụng TouchableOpacity để tạo nút bấm */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,   
    height: 100,  
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    color: "white",
    marginTop: 10,
    textAlign: "center",
    paddingHorizontal: 20, // Giúp căn giữa text khi xuống dòng
  },
  button: {
    marginTop: 20,
    backgroundColor: "#006600", // Màu xanh lá
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10, // Bo góc cho đẹp
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  }
});

export default Onboarding;
