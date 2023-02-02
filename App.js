import { StyleSheet, Text, View, Image } from "react-native";
import OnboardingScreen from "./screens/Onboarding";
import ProfileScreen from "./screens/ProfileScreen";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import headerImage from "./assets/title.png";
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
      <Stack.Navigator>
        {state.isOnboardingCompleted ? (
          // Onboarding completed, user is signed in
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
          />
        ) : (
          // User is NOT signed in
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        )}
      </Stack.Navigator>
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
