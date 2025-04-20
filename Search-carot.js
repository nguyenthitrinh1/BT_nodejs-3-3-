// SearchScreen.js (hoặc Search-carot.js)
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { data } from './data';

const SearchScreen = ({ route, navigation }) => {
    const initialSearchText = route?.params?.searchText ?? '';
    const [searchText, setSearchText] = useState(initialSearchText);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    
    if (!data) {
      setFilteredProducts([]);
      return;
    }

    if (searchText.trim() === '') {
      setFilteredProducts(data);
    } else {
      const filtered = data.filter((product) =>
        (product.name.toLowerCase().includes(searchText.toLowerCase()) ||
         product.category.toLowerCase().includes(searchText.toLowerCase()))
      );
      console.log('Filtered Products:', filtered);
      setFilteredProducts(filtered);
    }
  }, [searchText]);

  const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productWeight}>{item.weight}, Price</Text>
      <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search Stories"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Filter', { searchText })}>
  <Image 
    source={require('./assets/images/Group 6839.png')}
    style={{ width: 24, height: 24 }}
  />
</TouchableOpacity>

      </View>

      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
                  ListEmptyComponent={
          <Text style={styles.noResults}>
            {data && data.length === 0
              ? 'No products available in the database'
              : 'No products found for your search'}
          </Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginRight: 10,
  },
  filterText: {
    fontSize: 16,
    color: '#666',
  },
  productContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  productWeight: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  productPrice: {
    fontSize: 16,
    color: '#000',
    marginTop: 2,
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'green',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  noResults: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#666',
  },
});

export default SearchScreen;