import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function AddActivityScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>AddActivityScreen</Text>
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

