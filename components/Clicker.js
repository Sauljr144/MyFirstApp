import { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, Button, TextInput } from "react-native";

const Clicker = () => {
    const [pressedCount, setPressedCount] = useState(0);
    
  return (
    <>
        <Text style={{ margin: 16, fontSize: 16 }}>
            { pressedCount > 0 ? `The button was pressed ${pressedCount} times!`:'The button isn\'t pressed yet'}
            </Text>

            <Button disabled={pressedCount >= 5} title="Press Me" onPress={() => setPressedCount(pressedCount + 1)}/>
            <Button title="Reset Count" onPress={() => setPressedCount(0)}/>
    </>
  )
}

export default Clicker