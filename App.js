// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  TextInput,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
} from "react-native";
import GReenBox from "./components/GReenBox";
import BlueBox from "./components/BlueBox";
import RedBox from "./components/RedBox";
import Clicker from "./components/Clicker";
import MyInput from "./components/MyInput";
import ImageComponent from "./components/ImageComponent";

export default function App() {
  const handlePress = () => {
    console.log("this comes from our function");
  };

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "skyblue" }}>
        <ScrollView>
          <View style={styles.container}>
            <Text numberOfLines={4} onPress={handlePress}>
              Hello World! Let's make this a really long string of text to see
              what happens on our phone. I looks like it goes to the next
              line.Hello World! Let's make this a really long string of text to
              see what happens on our phone. I looks like it goes to the next
              line.Hello World! Let's make this a really long string of text to
              see what happens on our phone. I looks like it goes to the next
              line.Hello World! Let's make this a really long string of text to
              see what happens on our phone. I looks like it goes to the next
              line.
            </Text>

            <TouchableHighlight onPress={() => console.log("Image Pressed")}>
              <Image
                blurRadius={10}
                source={{
                  width: 200,
                  height: 200,
                  uri: "https://picsum.photos/200/300",
                }}
              />
            </TouchableHighlight>

            <Button
              title="Press Me"
              onPress={() =>
                Alert.alert("My title", "My message", [
                  { text: "yes", onPress: () => console.log('Yes was pressed')},
                  { text: "no", onPress: () => console.log('No was pressed') },
                ])
              }
            />

            <BlueBox />
            <RedBox />
            <Clicker />
            <GReenBox />
            <MyInput />
            {/* <StatusBar style="auto" /> */}
          </View>

          <ImageComponent />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
