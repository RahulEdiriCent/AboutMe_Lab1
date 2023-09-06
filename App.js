import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Me</Text>
      <Text>Hello</Text>
      <Text>I am Rahul Pankaja Edirisinghe</Text>
      <Text>Student ID: 301369991</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9a9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
