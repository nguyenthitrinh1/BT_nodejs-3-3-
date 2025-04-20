// Explore.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, TextInput } from 'react-native';

const Explore = ({ navigation }) => {
  const [searchText, setSearchText] = useState(''); 

  const categories = [
    { id: '1', name: 'Fresh Fruits & Vegetable', image: require('./assets/images/pngfuel 6.png') },
    { id: '2', name: 'Cooking Oil & Ghee', image: require('./assets/images/Group 6835.png') },
    { id: '3', name: 'Meat & Fish', image: require('./assets/images/pngfuel 9.png') },
    { id: '4', name: 'Bakery & Snacks', image: require('./assets/images/pngfuel 6 (1).png') },
    { id: '5', name: 'Beverages', image: require('./assets/images/pngfuel 6 (2).png') },
  ];

  const handleSearch = () => {
    if (searchText.trim() !== '') {
      navigation.navigate('Search', { searchText }); 
    }
  };

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryCard}
      onPress={() => item.name === 'Beverages' && navigation.navigate('Beverages')}
    >
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Thanh tìm kiếm với biểu tượng */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search Stories"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Image
            source={require('./assets/images/Vector (1).png')} 
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Danh sách danh mục */}
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#f0f0f0',
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  row: { justifyContent: 'space-between' },
  categoryCard: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  categoryImage: { width: 80, height: 80, resizeMode: 'contain' },
  categoryName: { fontSize: 14, textAlign: 'center', marginTop: 10 },
});

export default Explore;