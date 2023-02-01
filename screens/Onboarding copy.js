import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  Button,
  View,
} from "react-native";

const TextInputExample = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState("");

  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: "column",
        },
      ]}
    >
      <View style={{ flex: 0.1, backgroundColor: "green" }}></View>
      <View style={{ flex: 0.7, backgroundColor: "red" }}>
        <Text>Let us get to know you</Text>
        <Text>First Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
      </View>
      <View style={{ flex: 0.2, backgroundColor: "green" }}>
        <Button
          title="Next"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>
    </View>
  );
};

const Onboarding = () => {
  return <TextInputExample />;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default Onboarding;
