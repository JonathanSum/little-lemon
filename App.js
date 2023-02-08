import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import OnboardingScreen from "./screens/Onboarding";
import ProfileScreen from "./screens/ProfileScreen";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import headerImage from "./assets/title.png";
import headerImage_white from "./assets/title_white.png";
import left from "./assets/left.png";
import photo from "./assets/image.jpg";
import HomeScreen from "./screens/HomeScreen";
import { createTable, getProfile } from "./controller/database";
const Stack = createNativeStackNavigator();

const Back = ({ route }) => {
  // console.log("navigation of Back", navigation);
  console.log("route of back: ", route);
  return (
    <View
      style={{
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={[styles.image_left, { borderRadius: 50, padding: 20 }]}
        source={left}
      />
    </View>
  );
};
export default function App() {
  const [state, setState] = React.useState({
    isLoading: true,
    isOnboardingCompleted: false,
  });

  const LogoTitle = ({ props }) => {
    console.log("Debug", props);
    return (
      <View style={[{ height: 90, flexDirection: "row" }, styles.header_white]}>
        {/* <View
        style={{
          flex: 0.2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={pickImage}>
          <Image
            style={[styles.image_left, { borderRadius: 50, padding: 20 }]}
            source={left}
          />
        </TouchableOpacity>
      </View> */}
        <View
          style={{
            flex: 0.7,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image style={styles.image_white} source={headerImage_white} />
        </View>
        <View style={{ flex: 0.15, backgroundColor: "yellow" }}>
          <Image style={styles.image_left} source={left} />
        </View>
      </View>
    );
  };
  const LogoTitleHome = () => (
    <View style={[{ flexDirection: "row" }, styles.headerHome]}>
      <Image style={styles.imageHome} source={headerImage_white} />
      <Image style={styles.avatar} source={photo} />
    </View>
  );
  React.useEffect(() => {
    (async () => {
      try {
        await createTable("user");
        let profile = await getProfile();

        if (profile.length === 1) {
          setState((prevState) => {
            return { ...prevState, isOnboardingCompleted: true };
          });
        } else if (profile.length > 1) {
          throw "Something wrong, 2 users in the app.";
        }
      } catch (e) {
        console.error(e.message);
      }
    })();
  }, []);
  const backButton = () => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => Alert.alert("Log out Button pressed")}
    >
      <Text style={styles.buttonText}>Log out</Text>
    </TouchableOpacity>
  );
  return (
    <NavigationContainer>
      {/* Onboarding completed, user is signed in */}
      <Stack.Navigator
        initialRouteName={!state.isOnboardingCompleted ? "Onboarding" : "Home"}
      >
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({ route, navigation }) => ({
            headerTitle: () => <LogoTitle navigation={navigation} />,
            headerBackVisible: false,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Back route={route} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitle: (props) => <LogoTitleHome {...props} /> }}
        />
        {/* User is NOT signed in */}
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{
            headerTitle: (props) => (
              <View style={[{ flex: 0.15 }, styles.header]}>
                <Image style={styles.image} source={headerImage} />
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  image_white: { width: 180, height: 70, resizeMode: "contain" },
  image_left: { width: 30, height: 30 },
  header: {
    flex: 1,
    backgroundColor: "#DEE3E9",
    alignItems: "center",
    justifyContent: "center",
  },
  header_white: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    // alignItems: "center",
    // justifyContent: "center",
    borderColor: "#E1B549",
    borderWidth: 2,
    backgroundColor: "#F4CE14",

    // height: 50,
    borderRadius: 10,
  },
  headerHome: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",
    marginLeft: 80,
  },
  imageHome: {
    marginVertical: 20,
    resizeMode: "contain",
    height: 50,
    marginRight: 40,
  },
  avatar: {
    borderRadius: 50,
    height: 55,
    width: 55,
    marginRight: 80,
  },
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
