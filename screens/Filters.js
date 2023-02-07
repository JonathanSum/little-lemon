import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Filters = ({ onChange, selections, sections }) => {
  return (
    <View style={styles.filtersContainer}>
      {sections.map((section, index) => (
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            onChange(index);
          }}
        >
          <Text
            style={[
              styles.buttonText,
              { color: selections[index] ? "black" : "white" },
            ]}
          >
            Starters
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  filtersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
});
