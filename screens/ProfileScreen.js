import React from "react";
import {
  Button,
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
import * as ImagePicker from "expo-image-picker";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { MaskedTextInput } from "react-native-mask-text";
import headerImage from "../assets/title.png";
const TextInputExample = () => {
  const [image, setImage] = React.useState(null);
  const [fN, onChangeFN] = React.useState("Trilly");
  const [lN, onChangeLN] = React.useState("Doe");
  const [email, onChangeEmail] = React.useState("Tillydoe@example.com");

  const [phone, onChangePhone] = React.useState("(217) 555-0113");

  const [order, setOrder] = React.useState(true);
  const [pWChange, setPWChange] = React.useState(true);
  const [special, setSpecial] = React.useState(true);
  const [news, setNews] = React.useState(true);
  const [toggleCheckBox, setToggleCheckBox] = React.useState(true);
  const [state, setState] = React.useState({
    isLoading: true,
  });
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <>
      <Text style={[styles.headerText, { paddingTop: 60 }]}>
        Personal information
      </Text>
      <Text
        style={{
          color: "grey",
          fontSize: 18,
        }}
      >
        Avatar
      </Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.image} onPress={pickImage}>
          {!image ? (
            <Image style={styles.image} source={{ uri: image }} />
          ) : (
            <>
              <Text style={{ fontSize: 20 }}>
                {fN[0]}
                {lN[0]}
              </Text>
            </>
          )}
          {/* <Image style={styles.image} source={{ uri: image }} /> */}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonChange}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <Text style={styles.buttonTextChange}>Change</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonRemove}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <Text style={styles.buttonTextRemove}>Remove</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>First name</Text>
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
        defaultValue={phone}
        style={styles.phoneInput}
      />
      <Text style={[styles.bottomTitle, { paddingBottom: 15 }]}>
        Email notifications
      </Text>
      <View style={styles.checkContainer}>
        <BouncyCheckbox
          onPress={(isChecked) => {
            setOrder(isChecked);
          }}
          innerIconStyle={{
            borderRadius: 0,
          }}
          fillColor="#495E57"
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
          fillColor="#495E57"
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
          fillColor="#495E57"
        />
        <Text style={styles.label}>Special offers</Text>
      </View>
      <View style={[styles.checkContainer, { marginBottom: 0 }]}>
        <BouncyCheckbox
          onPress={(isChecked) => {
            setOrder(isChecked);
          }}
          innerIconStyle={{
            borderRadius: 0, // to make it a little round increase the value accordingly
          }}
          fillColor="#495E57"
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
  image: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 95,
    height: 95,
    backgroundColor: "#fff",
    borderRadius: 50,
    marginRight: 5,
    marginLeft: 4.5,
  },
  label: { fontSize: 15 },
  checkbox: { backgroundColor: "#495E57" },
  //Top two buttons started

  buttonTopGroup: {
    flexDirection: "row",
  },
  buttonChange: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#495E57",
    marginTop: 50,
    marginHorizontal: 10,
    marginBottom: 50,
    height: 50,
    borderRadius: 10,
    width: 100,
  },
  buttonRemove: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginTop: 50,
    marginBottom: 50,
    marginHorizontal: 10,
    height: 50,
    width: 100,
    borderColor: "#495E57",
    borderWidth: 1,
  },

  //Top two buttons ended
  buttonGroup: {
    flexDirection: "row",
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
  buttonTextChange: { fontSize: 18, color: "white" },
  buttonTextRemove: { fontSize: 18, color: "grey" },
  buttonTextDiscard: { fontSize: 18, color: "#9596AA" },
  buttonTextSave: { fontSize: 18, color: "white" },
  bottomTitle: {
    fontWeight: "bold",
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
    marginBottom: 15,
  },
});
export default ProfileScreen;
