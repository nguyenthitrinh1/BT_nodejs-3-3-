import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';

const HomeCarot = ({ navigation }) => {
  console.log("HomeCarot:");
  const danhSachUuDaiDocQuyen = [
    { id: '1', ten: 'Chuối Hữu Cơ', gia: '$9.99', hinhAnh: require('./assets/images/download.jpg') },
    { id: '2', ten: 'Táo Đỏ', gia: '$9.99', hinhAnh: require('./assets/images/pngfuel 1.png') },
  ];

  const danhSachBanChay = [
    { id: '1', ten: 'Ớt Chuông', gia: '$9.99', hinhAnh: require('./assets/images/92f1ea7dcce3b5d06cd1b1418f9b9413 3.png') },
    { id: '2', ten: 'Gừng', gia: '$9.99', hinhAnh: require('./assets/images/pngfuel 3.png') },
  ];

  const hienThiSanPham = ({ item }) => (
    <TouchableOpacity
  style={[styles.theSanPham, { backgroundColor: 'lightyellow' }]}
  onPress={() => {
    console.log('>>> Pressed in HomeCarot');
    navigation.navigate('ProductDetail', { product: item });
  }}
>
      <Image source={item.hinhAnh} style={styles.hinhAnhSanPham} />
      <Text style={styles.tenSanPham}>{item.ten}</Text>
      <Text style={styles.giaSanPham}>{item.gia}</Text>
      <TouchableOpacity style={styles.nutThem}>
        <Text style={styles.chuNutThem}>+</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.dauTrang}>
        <Image source={require('./assets/images/Group.png')} style={styles.bieuTuongCaiCarot} />
        <Text style={styles.viTri}>Dhaka, Banani</Text>
      </View>
      <TextInput style={styles.thanhTimKiem} placeholder="Tìm kiếm cửa hàng" />
      <ScrollView
        style={styles.scrollView}
        nestedScrollEnabled={true} 
        showsVerticalScrollIndicator={false} 
      >
        <Image source={require('./assets/images/banner.png')} style={styles.banner} />
        <View style={styles.dauMuc}>
          <Text style={styles.tieuDeMuc}>Ưu đãi độc quyền</Text>
          <TouchableOpacity>
            <Text style={styles.xemTatCa}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={danhSachUuDaiDocQuyen}
          renderItem={hienThiSanPham}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.danhSachSanPham}
          scrollEnabled={false}
        />
        <View style={styles.dauMuc}>
          <Text style={styles.tieuDeMuc}>Bán chạy nhất</Text>
          <TouchableOpacity>
            <Text style={styles.xemTatCa}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={danhSachBanChay}
          renderItem={hienThiSanPham}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.danhSachSanPham}
          scrollEnabled={false} 
        />
        <View style={{ height: 300, backgroundColor: '#f0f0f0', marginTop: 20 }}>
          <Text style={{ textAlign: 'center', paddingTop: 20 }}>Nội dung thêm để bật cuộn</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  dauTrang: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  bieuTuongCaiCarot: { width: 24, height: 24, marginRight: 10 },
  viTri: { fontSize: 16, fontWeight: 'bold' },
  thanhTimKiem: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  scrollView: { flex: 1 },
  banner: { width: '100%', height: 150, borderRadius: 10, marginBottom: 20 },
  dauMuc: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  tieuDeMuc: { fontSize: 18, fontWeight: 'bold' },
  xemTatCa: { color: 'green', fontSize: 16 },
  danhSachSanPham: { marginBottom: 20 },
  theSanPham: { marginRight: 15, borderWidth: 1, borderColor: '#e0e0e0', borderRadius: 10, padding: 10 },
  hinhAnhSanPham: { width: 100, height: 100, resizeMode: 'contain' },
  tenSanPham: { fontSize: 16, marginVertical: 5 },
  giaSanPham: { fontSize: 14, color: '#666' },
  nutThem: {
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
  chuNutThem: { color: '#fff', fontSize: 18 },
});

export default HomeCarot;