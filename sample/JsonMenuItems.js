import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import menuItems from './menuItems.json';

const JsonMenuItems = () => {
  const { menu } = menuItems;

  const Item = ({ name, price }) => (
    <View style={styles.innerContainer}>
      <Text style={styles.itemText}>{name}</Text>
      <Text style={styles.itemText}>{ '$' + price}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item name={item.title} price={item.price} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Little Lemon Menu</Text>
      <FlatList
        data={menu}
        keyExtractor={({ id }) => id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor:  '#495E57',
    flexDirection: 'row',
    justifyContent: 'space-between', 
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 22,
  },
  headerText: {
    color: '#495E57',
    fontSize: 30,
    textAlign: 'center',
  },
});

export default JsonMenuItems;