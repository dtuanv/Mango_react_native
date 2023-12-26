import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

interface DataObject {
    description: string,
    num: number
}
interface HelloWorlsProps {
    name: string;
    onOk: (data: string, dataObject: DataObject) => void;
    onCancel: () => void;
}
const HelloWorld: React.FC<HelloWorlsProps> = ({ name, onOk, onCancel }) => {
    const [inputValue, setInputValue] = useState<string>('')
    const [formDataObject, setFormDataObject] = useState<DataObject>({
        description: '',
        num: 0
    })
    const handleOkPress = () => {
        onOk(inputValue, formDataObject)
    }

    return (
        <View>
            <Text>HelloWorld {name}</Text>
            <TextInput style={styles.input} placeholder='Input' value={inputValue} onChangeText={(inputValue) => setInputValue(inputValue)}></TextInput>
            <TextInput style={styles.input} placeholder='Description' value={formDataObject.description}
                onChangeText={(text) => setFormDataObject({ ...formDataObject, description: text })}></TextInput>
            <TextInput style={styles.input} placeholder='Number'
                keyboardType='numeric' value={formDataObject.num.toString()} onChangeText={(text) => setFormDataObject({ ...formDataObject, num: parseInt(text, 10) || 0 })}></TextInput>
            <TextInput>

            </TextInput>
            <View style={styles.buttons}>
                <Button onPress={handleOkPress} title='OK' ></Button>
            </View>
            <View style={styles.buttons}>
                <Button title="Cancel" onPress={onCancel}  />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10,
        paddingLeft: 6
    },
    buttons: {
        paddingTop: 5
    }
})
export default HelloWorld