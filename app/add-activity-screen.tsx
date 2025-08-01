import { useActivitiesContext } from "@/components/ActivitiesProvider";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function AddActivityScreen() {
    const [steps, setSteps] = useState<number>(0);
    const {insertActivity} = useActivitiesContext();
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>AddActivityScreen</Text>
            <TextInput placeholder="Enter steps" keyboardType="number-pad" onChangeText={(value) => setSteps(parseInt(value))} />
            <Pressable style={styles.addButton} onPress={() => {
                insertActivity(steps, new Date());
                router.replace("/");
            }}>
                <Text style={styles.buttonText}>Add Activity</Text>
            </Pressable>
            <Link style={styles.button} href={'/'} replace>
                <Text style={styles.buttonText}>Go back</Text>
            </Link>
        </View>
    )
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
  addButton: {
    backgroundColor: "#1ED2AF",
    padding: 16,
    width: "100%",
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#D00414',
    padding: 16,
    width: "100%"
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  }
});
