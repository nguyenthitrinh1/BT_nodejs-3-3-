import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

const Verification = () => {
  const [otp, setOtp] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your 4-digit code</Text>

      <TextInput
        style={styles.input}
        placeholder="----"
        keyboardType="number-pad"
        maxLength={4}
        value={otp}
        onChangeText={setOtp}
      />

      <Text style={styles.resendText}>Resend Code</Text>

      {/* Nút xác nhận */}
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>→</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  input: { fontSize: 24, textAlign: "center", borderBottomWidth: 1, width: "50%" },
  resendText: { marginTop: 10, color: "green" },
  confirmButton: { position: "absolute", bottom: 40, right: 30, backgroundColor: "green", padding: 15, borderRadius: 50 },
  confirmButtonText: { color: "#fff", fontSize: 24 }
});

export default Verification ;
