import { StyleSheet, Text, View, Image } from "react-native";
import OnboardingScreen from "./screens/Onboarding";
import ProfileScreen from "./screens/ProfileScreen";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import headerImage from "./assets/title.png";
import HomeScreen from "./screens/HomeScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  const [state, setState] = React.useState({
    isLoading: true,
    isOnboardingCompleted: true,
  });
  const LogoTitle = () => (
    <View style={[{ flex: 0.15, backgroundColor: "red" }, styles.header]}>
      <Image style={styles.image} source={headerImage} />
    </View>
  );
  return (
    <NavigationContainer>
      {state.isOnboardingCompleted ? (
        // Onboarding completed, user is signed in
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
          />
        </Stack.Navigator>
      ) : (
        // <Stack.Screen name="Home" component={HomeScreen} />

        // User is NOT signed in
        <Stack.Navigator>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#DEE3E9",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
