import { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, Button, TextInput } from "react-native";

const MyInput = () => {

    const [name, setName] = useState('')
    
  return (
    <>
     <View style={{flex: 1, alignItems: 'center', justifyContent:'center', padding: 16}}>
            <Text>
              {name ? `Hi ${name}!` :'What is your name?'}
            </Text>
              <TextInput secureTextEntry style={{padding: 8, backgroundColor:'#f5f5f5', width: 200}} onChangeText={text => setName(text)}>

              </TextInput>
          </View>
    </>
  )
}

export default MyInput