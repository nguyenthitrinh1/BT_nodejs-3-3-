import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity,Image } from 'react-native';

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
         <View style={styles.illustrationContainer}>
                <Image
                  source={require("./assets/images/Group.png")} // Use require for local assets
                  style={styles.illustration} // Specific styling for the image
                />
              </View>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>User credentials to continue</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Text style={styles.termsText}>By continuing you agree to our Terms of Service and Privacy Policy.</Text>

      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 20 },
  input: { width: '100%', borderBottomWidth: 1, fontSize: 18, marginBottom: 20, padding: 10 },
  termsText: { fontSize: 14, color: '#666', textAlign: 'center', marginBottom: 20 },
  signUpButton: { backgroundColor: 'green', padding: 15, borderRadius: 10, width: '100%', alignItems: 'center' },
  signUpButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  loginText: { marginTop: 20, color: 'green', fontSize: 16 }
});

export default SignUp;