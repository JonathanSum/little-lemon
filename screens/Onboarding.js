import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Image,
} from "react-native";
import headerImage from "../assets/title.png";
const TextInputExample = () => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <View style={[{ flex: 0.15, backgroundColor: "red" }, styles.header]}>
        <Image style={styles.image} source={headerImage} />
      </View>
      <View
        style={[
          {
            flex: 0.75,
          },
          styles.main,
        ]}
      >
        <Text style={[styles.headerText, { paddingTop: 60 }]}>
          Let us get to know you
        </Text>
        <Text style={[styles.text, { paddingTop: 120 }]}>First Name</Text>
        <TextInput
          style={[styles.input, styles.text]}
          onChangeText={onChangeText}
          value={text}
        />
        <Text style={[styles.text]}>Email</Text>
        <TextInput
          style={[styles.input, styles.text]}
          onChangeText={onChangeNumber}
          value={number}
          placeholder=""
          keyboardType="numeric"
        />
      </View>
      <View
        style={[
          {
            flex: 0.2,
          },
          styles.bottom,
        ]}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const Onboarding = () => {
  return <TextInputExample />;
};
const styles = StyleSheet.create({
  image: {},
  text: {
    textAlign: "center",
    marginBottom: 24,
    fontSize: 28,
    color: "#374B57",
  },
  container: {
    flex: 1,
  },
  input: {
    height: 50,
    marginHorizontal: 40,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    borderColor: "#374B57",
  },
  headerText: {
    fontSize: 32,
    textAlign: "center",
    marginBottom: 24,
    color: "#374B57",
  },
  header: {
    paddingTop: 24,
    backgroundColor: "#DEE3E9",
    alignItems: "center",
    justifyContent: "center",
  },
  bottom: {
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "#F1F4F7",
  },
  button: {
    justifyContent: "center",
    backgroundColor: "#CBD2D9",
    minWidth: "10%",
    marginRight: 50,
    width: 125,
    height: 50,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 24,
    textAlign: "center",
    color: "#475B6A",
  },
  main: {
    backgroundColor: "#CBD2D9",
  },
});
export default Onboarding;
