import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const Beverages = ({ navigation }) => {
  console.log("Beverages:");
  const beverages = [
    { id: '1', name: 'Diet Coke', price: '$19.99', image: require('./assets/images/pngfuel 11.png') },
    { id: '2', name: 'Sprite Can', price: '$29.50', image: require('./assets/images/pngfuel 12.png') },
    { id: '3', name: 'Apple & Grape Juice', price: '$15.99', image: require('./assets/images/tree-top-juice-apple-grape-64oz 1.png') },
    { id: '4', name: 'Orange Juice', price: '$21.99', image: require('./assets/images/tree-top-juice-apple-grape-64oz 1 (1).png') },
    { id: '5', name: 'Coca Cola Can', price: '$4.99', image: require('./assets/images/pngfuel 13.png') },
    { id: '6', name: 'Pepsi Can', price: '$4.99', image: require('./assets/images/pngfuel 14.png') },
  ];

  const renderBeverage = ({ item }) => (
    <TouchableOpacity
      style={styles.beverageCard}
    >
      <Image source={item.image} style={styles.beverageImage} />
      <Text style={styles.beverageName}>{item.name}</Text>
      <Text style={styles.beveragePrice}>{item.price}</Text>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Beverages</Text>
      <FlatList
        data={beverages}
        renderItem={renderBeverage}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  row: { justifyContent: 'space-between' },
  beverageCard: { flex: 1, margin: 5, borderWidth: 1, borderColor: '#e0e0e0', borderRadius: 10, padding: 10, alignItems: 'center' },
  beverageImage: { width: 80, height: 80, resizeMode: 'contain' },
  beverageName: { fontSize: 14, textAlign: 'center', marginVertical: 5 },
  beveragePrice: { fontSize: 12, color: '#666' },
  addButton: { backgroundColor: 'green', borderRadius: 15, width: 30, height: 30, justifyContent: 'center', alignItems: 'center' },
  addButtonText: { color: '#fff', fontSize: 18 },
});

export default Beverages;