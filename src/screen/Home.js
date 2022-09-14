import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,} from 'react-native';
import Button from '../component/Button';

const Home = () => (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>HOMEPAGE!</Text>
      <Text style={styles.title}>New line created</Text>
      <Button />
      <StatusBar style="auto" />
    </View>
)


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: 'green',
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      fontSize: 20
    }
  });
  

export default Home;