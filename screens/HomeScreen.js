import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

const url =
  "https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json";
const HomeScreen = () => {
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data.menu);
        console.log("data: ", data.menu);
      });
    // console.log("data: ", data);
  }, []);
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
      <View style={{ flex: 0.48, backgroundColor: "#495E57" }}>
        <Text style={styles.HeaderText}>Little Lemon</Text>
        <Text style={styles.topTextHeader}>Chicago</Text>
        <Text style={styles.topTextP}>
          We are a family owned{"\n"}
          Mediterranean restaurant,{"\n"}
          focused on traditional{"\n"}
          recipes served with a{"\n"}
          modern twist.
        </Text>
      </View>

      <View style={{ flex: 0.2, backgroundColor: "white" }}>
        <Text style={styles.deliveryHeaderText}>ORDER FOR DELIVERY!</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert("Simple Button pressed")}
          >
            <Text style={styles.buttonText}>Starters</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert("Simple Button pressed")}
          >
            <Text style={styles.buttonText}>Main</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert("Simple Button pressed")}
          >
            <Text style={styles.buttonText}>Desserts</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert("Simple Button pressed")}
          >
            <Text style={styles.buttonText}>Drinks</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <View style={{ flex: 0.35, backgroundColor: "white" }}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View>
              <Text>{item.name}</Text>
              <Text>{item.description}</Text>
              <Text>${item.price}</Text>
            </View>
          )}
          keyExtractor={(item) => item.name}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
  },
  HeaderText: {
    color: "#EFCB15",
    fontSize: 45,
    paddingTop: 24,
    paddingLeft: 20,
  },
  topTextHeader: {
    color: "white",
    paddingLeft: 20,
    fontSize: 30,
  },
  topText: {
    color: "white",
    paddingLeft: 20,
    fontSize: 20,
  },
  topTextP: {
    color: "white",
    paddingLeft: 20,
    fontSize: 17,
  },
  deliveryHeaderText: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
  },
  deliveryPText: {
    color: "back",
    backgroundColor: "white",
    fontSize: 17,
  },
  button: {
    justifyContent: "center",
    backgroundColor: "#CBD2D9",
    minWidth: "10%",

    width: 90,
    height: 50,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 15,
    textAlign: "center",
    color: "#475B6A",
  },
});

export default HomeScreen;
