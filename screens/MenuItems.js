import React from 'react';
import {View, Text, ScrollView} from 'react-native';

const menuItemsToDisplay = [
  'Humus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta \n Chocolate Cake \n Lemon Sorbet \n Vanilla Ice Cream \n Coffee \n Tea \n Lemonade \n Iced Tea \n Soda \n Water',
]

export default function MenuItems() {
  return (
    <View style={{ flex: 0.75}}>
      <ScrollView style={{
        paddingHorizontal: 40,
        paddingVertical: 40,
        backgroundColor: 'black',
      }}>
        <Text style={{ color: 'white', fontSize: 40, flexWrap: 'wrap'}}>View Menu
        </Text>
        <Text style={{ color: '#FACE14', fontSize: 36 }}>
          {menuItemsToDisplay[0]}
        </Text>
      </ScrollView>
    </View>
  );
}