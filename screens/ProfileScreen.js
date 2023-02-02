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
  ScrollView,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import headerImage from "../assets/title.png";
import { MaskedTextInput } from "react-native-mask-text";
const TextInputExample = () => {
  const [fN, onChangeFN] = React.useState("");
  const [lN, onChangeLN] = React.useState("");
  const [email, onChangeEmail] = React.useState("");

  const [phone, onChangePhone] = React.useState("");

  const [order, setOrder] = React.useState(false);
  const [pWChange, setPWChange] = React.useState(false);
  const [special, setSpecial] = React.useState(false);
  const [news, setNews] = React.useState(false);
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  const [state, setState] = React.useState({
    isLoading: true,
  });

  return (
    <>
      <Text style={[styles.headerText, { paddingTop: 60 }]}>
        Personal information
      </Text>
      <Text style={[styles.text, { paddingTop: 20 }]}>First name</Text>
      <TextInput
        style={[styles.input, styles.text]}
        onChangeText={onChangeFN}
        value={fN}
      />
      <Text style={[styles.text]}>Last name</Text>
      <TextInput
        style={[styles.input, styles.text]}
        onChangeText={onChangeLN}
        value={lN}
        placeholder=""
      />
      <Text style={[styles.text]}>Email</Text>
      <TextInput
        style={[styles.input, styles.text]}
        onChangeText={onChangeEmail}
        value={email}
        placeholder=""
      />
      <Text style={[styles.text]}>Phone number</Text>
      <MaskedTextInput
        mask="(999) 999-9999"
        onChangeText={(text, rawText) => {
          onChangePhone(text);
        }}
        value={""}
        style={styles.phoneInput}
      />
      <Text style={styles.bottomTitle}>Email notifications</Text>
      <View style={styles.checkContainer}>
        <BouncyCheckbox
          onPress={(isChecked) => {
            setOrder(isChecked);
          }}
          innerIconStyle={{
            borderRadius: 0, // to make it a little round increase the value accordingly
          }}
        />
        <Text style={styles.label}>Order statuses</Text>
      </View>
      <View style={styles.checkContainer}>
        <BouncyCheckbox
          onPress={(isChecked) => {
            setOrder(isChecked);
          }}
          innerIconStyle={{
            borderRadius: 0, // to make it a little round increase the value accordingly
          }}
        />
        <Text style={styles.label}>Password changes</Text>
      </View>
      <View style={styles.checkContainer}>
        <BouncyCheckbox
          onPress={(isChecked) => {
            setOrder(isChecked);
          }}
          innerIconStyle={{
            borderRadius: 0, // to make it a little round increase the value accordingly
          }}
        />
        <Text style={styles.label}>Special offers</Text>
      </View>
      <View style={styles.checkContainer}>
        <BouncyCheckbox
          onPress={(isChecked) => {
            setOrder(isChecked);
          }}
          innerIconStyle={{
            borderRadius: 0, // to make it a little round increase the value accordingly
          }}
        />
        <Text style={styles.label}>Newsletter</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert("Simple Button pressed")}
      >
        <Text style={styles.buttonText}>Log out</Text>
      </TouchableOpacity>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.buttonDiscard}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <Text style={styles.buttonTextDiscard}>Discard changes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonSave}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <Text style={styles.buttonTextSave}>Save changes</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const ProfileScreen = () => {
  return (
    <ScrollView
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <TextInputExample />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  image: {},
  buttonGroup: {
    flexDirection: "row",
    marginBottom: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDiscard: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CBD2D9",
    marginTop: 50,
    marginHorizontal: 10,
    height: 50,
    borderRadius: 10,
    width: 155,
    borderColor: "#495E57",
    borderWidth: 1,
  },
  buttonSave: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#495E57",
    marginTop: 50,
    marginHorizontal: 10,
    height: 50,
    borderRadius: 10,
    width: 155,
  },
  buttonTextDiscard: { fontSize: 18, color: "#9596AA" },
  buttonTextSave: { fontSize: 18, color: "white" },
  bottomTitle: {
    fontSize: 20,
    marginVertical: 14,
  },
  text: {
    // textAlign: "center",
    paddingTop: 14,
    paddingBottom: 10,
    fontSize: 14,
    color: "#374B57",
  },
  container: {
    paddingHorizontal: 24,
    flex: 1,
  },
  phoneInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#374B57",
    marginBottom: 14,
    fontSize: 20,
    color: "#374B57",
  },
  input: {
    height: 40,
    borderWidth: 1,
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
    paddingTop: 14,
    backgroundColor: "#DEE3E9",
    justifyContent: "center",
  },
  bottom: {
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "#F1F4F7",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#E1B549",
    borderWidth: 2,
    backgroundColor: "#F4CE14",
    marginTop: 50,
    marginHorizontal: 10,
    height: 50,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    color: "black",
  },
  main: {
    backgroundColor: "#CBD2D9",
    paddingBottom: 150,
  },
  checkContainer: {
    flexDirection: "row",
  },
});
export default ProfileScreen;
