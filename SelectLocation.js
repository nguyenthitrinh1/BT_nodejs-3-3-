import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SelectLocation = ({ navigation }) => {
  return (
    
    <View style={styles.container}>
        {/* Placeholder for map */}
      <View style={styles.mapPlaceholder}>
        <Image
          source={require("./assets/images/illustration.png")} // Use require for local assets
          style={styles.mapImage} // Add specific styling for the image
        />
      </View>
      <Text style={styles.title}>SELECT YOUR LOCATION</Text>
      <Text style={styles.subtitle}>Switch your location to stay in tune with what's happening in your zone</Text>

      

      <Text style={styles.label}>Your Zone</Text>
      <Text style={styles.zone}>Bonoea</Text>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate("Login")} 
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  subtitle: { fontSize: 16, textAlign: 'center', color: '#666', marginBottom: 20 },
  mapPlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    height: 200, 
    width: '100%', 
  },
  mapImage: {
    width: '100%', 
    height: '100%',
    resizeMode: 'contain', 
  },
  label: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  zone: { fontSize: 16, color: '#666', marginBottom: 20 },
  submitButton: { backgroundColor: 'green', padding: 15, borderRadius: 10, alignItems: 'center' },
  submitButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default SelectLocation;