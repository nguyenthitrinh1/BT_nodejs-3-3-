import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Ảnh banner */}
      <Image source={require("./assets/images/Mask-Group.png")} style={styles.image} />

      <Text style={styles.title}>Get your groceries with Nectar</Text>

      {/* Quốc kỳ + Mã vùng */}
      <View style={styles.phoneInput}>
<Image source={require("./assets/images/Rectangle.png")} style={styles.flag} />
<Text style={styles.phoneText}>+880</Text>
      </View>

      <Text style={styles.orText}>Or connect with social media</Text>

      {/* Nút đăng nhập Google */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>

      {/* Nút đăng nhập Facebook */}
      <TouchableOpacity style={[styles.button, styles.facebookButton]}>
        <Text style={styles.buttonText}>Continue with Facebook</Text>
      </TouchableOpacity>

      {/* Nút tiếp tục */}
      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate("PhoneNumber")}>
        <Text style={styles.nextButtonText}>→</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#fff" },
  image: { width: 300, height: 200, resizeMode: "contain" },
  title: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginVertical: 20 },
  phoneInput: { flexDirection: "row", alignItems: "center", marginVertical: 10 },
  flag: { width: 30, height: 20, marginRight: 10 },
  phoneText: { fontSize: 18, fontWeight: "bold" },
  orText: { fontSize: 14, color: "gray", marginVertical: 10 },
  button: { backgroundColor: "#4285F4", padding: 12, borderRadius: 8, width: "80%", alignItems: "center", marginVertical: 5 },
  facebookButton: { backgroundColor: "#3b5998" },
  buttonText: { color: "#fff", fontSize: 16 },
  nextButton: { position: "absolute", bottom: 40, right: 30, backgroundColor: "green", padding: 15, borderRadius: 50 },
  nextButtonText: { color: "#fff", fontSize: 24 }
});

export default LoginScreen;
