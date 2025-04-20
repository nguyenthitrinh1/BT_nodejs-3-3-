import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FilterScreen = ({ navigation }) => {
  const [selectedCategories, setSelectedCategories] = useState(['Eggs']);
  const [selectedBrands, setSelectedBrands] = useState(['Cocola']);

  const categories = ['Eggs', 'Noodles & Pasta', 'Chips & Crisps', 'Fast Food'];
  const brands = ['Individual Collection', 'Cocola', 'Ifad', 'Kazi Farmas'];

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((item) => item !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const toggleBrand = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((item) => item !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const applyFilters = () => {
    navigation.navigate('Search', {
      selectedCategories,
      selectedBrands,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Categories</Text>
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          style={styles.checkboxContainer}
          onPress={() => toggleCategory(category)}
        >
          <View style={styles.checkbox}>
            {selectedCategories.includes(category) && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <Text style={styles.checkboxLabel}>{category}</Text>
        </TouchableOpacity>
      ))}

     
      <Text style={styles.sectionTitle}>Brand</Text>
      {brands.map((brand) => (
        <TouchableOpacity
          key={brand}
          style={styles.checkboxContainer}
          onPress={() => toggleBrand(brand)}
        >
          <View style={styles.checkbox}>
            {selectedBrands.includes(brand) && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <Text style={styles.checkboxLabel}>{brand}</Text>
        </TouchableOpacity>
      ))}

     
      <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
        <Text style={styles.applyButtonText}>Apply Filter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  closeText: {
    fontSize: 24,
    marginRight: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#666',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkmark: {
    color: 'green',
    fontSize: 16,
  },
  checkboxLabel: {
    fontSize: 16,
  },
  applyButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FilterScreen;