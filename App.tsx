import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import HelloWorld from './src/components/HelloWorld';
import {DataObject} from './src/components/HelloWorld' 

export default function App() {
  const handleOK = (inputValue : string, data: DataObject) =>{
    Alert.alert('Hello', `Hello, ${inputValue}!`);

    console.log(' ok pressed',inputValue);
    console.log(' ok data',data);
  }

  const handleCancel  = ()  =>{
    console.log('Cancel button pressed');
  }
  return (
    <View style={styles.container}>
        <HelloWorld name="Tuan" onOk={handleOK} onCancel={handleCancel}></HelloWorld>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
