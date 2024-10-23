import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function JsonMenu() {
  const [myJSON, setJsonObj] = React.useState([]);
  
  const convertStringToJson = () => {
    const str = `[
      {
        "name": "Veggie Kabob", 
        "price": "$12", 
        "type": "Main Dish"
      },{
        "name": "Lentil Soup", 
        "price": "$3.75", 
        "type": "Side"
      },{
        "name": "Baklava", 
        "price": "$3.00", 
        "type": "Dessert"
      },{
        "name": "Beer", 
        "price": "$6.00", 
        "type": "Drink"
      }
    ]`;

    const jsonObj = JSON.parse(str);
    setJsonObj(jsonObj);

    //   const myStr = '{"name": "Veggie Kabob","price": "$12","type": "Main Dish"}';
    //   const result = JSON.parse(myStr);
    //   setJsonObj(result);
  };

  React.useEffect(() => {
    convertStringToJson();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Little Lemon</Text>
      {myJSON && (
        myJSON.map((menuItem) => {
          return (
            <View style={styles.innerContainer}>
              <Text style={styles.itemText}>{'Menu Item: ' + menuItem.name}</Text>
              <Text style={styles.itemText}>{'Price: ' + menuItem.price}</Text>
              <Text style={styles.itemText}>{'Type: ' + menuItem.type}</Text>
            </View>
          );
        })
      )}
    </View>

    // <View style={styles.container}>
    //   <Text style={styles.headerText}>Little Lemon</Text>
    //   {myJSON && (
    //     <View style={styles.innerContainer}>
    //       <Text style={styles.itemText}>
    //         {'Menu Item: ' + myJSON.name}
    //       </Text>
    //       <Text style={styles.itemText}>
    //         {'Price: ' + myJSON.price}
    //       </Text>
    //       <Text style={styles.itemText}>
    //         {'Type: ' + myJSON.type}  
    //       </Text>
    //     </View>
    //   )}
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    padding: 20,
    backgroundColor: '#F4CE14',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 30,
    color: '#495E57',
    textAlign: 'center',

  },
  itemText: {
    fontSize: 22,
    color: '#495E57',
  },
});
