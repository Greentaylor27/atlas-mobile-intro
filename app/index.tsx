import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Edit app/index.tsx to edit this screen.</Text>
      <Pressable style={styles.button} onPress={() => {
        router.push('/add-activity-screen');
      }}>
        <Text style={styles.buttonText}>Add Activity</Text>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
  },
  button: {
    backgroundColor: '#1ED2AF',
    padding: 16,
    width: "100%"
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  }
});
