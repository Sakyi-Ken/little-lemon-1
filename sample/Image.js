import { View, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 550,
  },
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/little-lemon-logo.png'
        }}
      />
    </View>
  )
};

export default DisplayAnImage;