import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

interface DataObject {
    password: string,
    num: number
}
interface Error{
    username: string,
    isUsernameValid: boolean,
    password: string,
    isPasswordValid: boolean,

}
interface HelloWorlsProps {
    name: string;
    onOk: (data: string, dataObject: DataObject) => void;
    onCancel: () => void;
}
const HelloWorld: React.FC<HelloWorlsProps> = ({ name, onOk, onCancel }) => {
    const [username, setUsername] = useState<string>('')
    const [formDataObject, setFormDataObject] = useState<DataObject>({
        password: '',
        num: 0
    })
    const [errors, setErrors] = useState<Error>({
        username:'',
        isUsernameValid: true,
        password:'',
        isPasswordValid: true
    }) 

    const validateForm = () => {
        let error: Error = {
            username:'',
            isUsernameValid: true,
            password:'',
            isPasswordValid: true
        };
        if(username == '' || !username){
            error.username = 'user name is requierd',
            error.isUsernameValid = false
        }
        console.log("pwd" ,formDataObject.password)
        if(formDataObject.password == '' || !formDataObject.password){
            error.password = 'Password is requierd'
            error.isPasswordValid = false
        }else{
            if(formDataObject.password.length < 3){
                error.password = 'Password must be at least 3 characters long.'
                error.isPasswordValid = false
            }
        }

      
        setErrors(error)
    }
    
    const handleOkPress = () => {
        validateForm()
        console.log(" error.username  ", errors.username )
        onOk(username, formDataObject)
    }

    return (
        <View>
            <Text>HelloWorld {name}</Text>
             {!errors.isUsernameValid ? <Text style={styles.error}>{errors.username}</Text> : null}
            <TextInput style={errors.isPasswordValid  ?styles.input: styles.errorInput} placeholder='Username' value={username} onChangeText={(username) => setUsername(username)}></TextInput>

            {!errors.isPasswordValid ? <Text style={styles.error}>{errors.password}</Text> : null}

            <TextInput style={ errors.isPasswordValid  ?styles.input: styles.errorInput} placeholder='Password' value={formDataObject.password}
                onChangeText={(text) => setFormDataObject({ ...formDataObject, password: text })}></TextInput>
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
    errorInput:{
        height: 40, borderColor: 'red', borderWidth: 1, marginBottom: 10,
        paddingLeft: 6
    },
    buttons: {
        paddingTop: 5
    },
    error: { 
        color: 'red', 
        fontSize: 14, 
        marginBottom: 5, 
    },
})
export default HelloWorld