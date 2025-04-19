import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductDetail = ({ route, navigation }) => {
  console.log("ProductDetail:");
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.container}>
      <Image source={product.hinhAnh} style={styles.productImage} />
      <Text style={styles.productName}>{product.ten}</Text>
      <Text style={styles.tag}>1kg, Price</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))}>
          <Text style={styles.quantityButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
          <Text style={styles.quantityButton}>+</Text>
        </TouchableOpacity>
        <Text style={styles.price}>
  ${(product.price * quantity).toFixed(2)}
</Text>
      </View>
      <TouchableOpacity style={styles.favoriteButton}>
        <Text style={styles.favoriteText}>♥</Text>
      </TouchableOpacity>
      <Text style={styles.sectionTitle}>Product Detail</Text>
      <Text style={styles.detailText}>
        Apples Are Nutritious. Apples May Be Good For Weight Loss. Apples May Be Good For Your Heart.
      </Text>
      <Text style={styles.sectionTitle}>Nutritions</Text>
      <Text style={styles.sectionTitle}>Review</Text>
      <View style={styles.reviewStars}>
        {[...Array(5)].map((_, i) => (
          <Text key={i} style={styles.star}>★</Text>
        ))}
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add To Basket</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  productImage: { width: '100%', height: 250, resizeMode: 'contain', marginBottom: 20 },
  productName: { fontSize: 24, fontWeight: 'bold', marginBottom: 5 },
  tag: { fontSize: 16, color: '#666', marginBottom: 10 },
  quantityContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  quantityButton: { fontSize: 24, marginHorizontal: 15 },
  quantity: { fontSize: 18, fontWeight: 'bold' },
  price: { fontSize: 18, fontWeight: 'bold', marginLeft: 'auto' },
  favoriteButton: { position: 'absolute', top: 20, right: 20 },
  favoriteText: { fontSize: 24, color: '#ccc' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  detailText: { fontSize: 16, color: '#666', marginBottom: 20 },
  reviewStars: { flexDirection: 'row', marginBottom: 20 },
  star: { fontSize: 18, color: 'gold' },
  addButton: { backgroundColor: 'green', padding: 15, borderRadius: 10, alignItems: 'center' },
  addButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default ProductDetail;