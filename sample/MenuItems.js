import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function MenuItems({item}) {
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  // React.useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => setError(error))
  //     .finally(() => setLoading(false));
  // }, []);

  const getMenu = async () => {
    try{
      const response = await fetch('https://raw.githubusercontent.com/  Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu-items-by-category.json'    
      );
      const responseJson = await response.json();
      setData(responseJson.menu);
      //setLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getMenu();
  }, []);

  const Item = ({ name, price }) => (
    <View style={menuStyles.innerContainer}>
      <Text style={menuStyles.itemText}>{name}</Text>
      <Text style={menuStyles.itemText}>{ '$' + price}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item name = {item.title} price = {item.price}/>
  )

  return (
    <View style={menuStyles.container}>
      <Text style={menuStyles.headerText}>Little Lemon</Text>

      {isLoading ? <Text>Loading...</Text> : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={ ({ id }, index ) => id}
        />
      )}
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor:  '495E57',
    flowDirection: 'row',
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
