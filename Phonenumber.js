import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";

const Phonenumber = ({ navigation }) => {
  const [phone, setPhone] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your mobile number</Text>

      <View style={styles.inputContainer}>
        {/* Hiển thị hình quốc kỳ */}
        <Image source={require("./assets/images/Rectangle.png")} style={styles.flag} />
        <Text style={styles.countryCode}>+880</Text>

        {/* Ô nhập số điện thoại */}
        <TextInput
          style={styles.input}
          placeholder="Enter phone number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      {/* Nút tiếp tục */}
      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate("OTPVerification")}>
        <Text style={styles.nextButtonText}>→</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  inputContainer: { flexDirection: "row", alignItems: "center", borderBottomWidth: 1, width: "80%" },
  flag: { width: 30, height: 20, marginRight: 10 },
  countryCode: { fontSize: 18, fontWeight: "bold", marginRight: 10 },
  input: { fontSize: 18, flex: 1 },
  nextButton: { position: "absolute", bottom: 40, right: 30, backgroundColor: "green", padding: 15, borderRadius: 50 },
  nextButtonText: { color: "#fff", fontSize: 24 }
});

export default Phonenumber;
