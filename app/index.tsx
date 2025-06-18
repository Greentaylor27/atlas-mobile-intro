import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { useActivities } from "@/hooks/useActivities";

export default function Index() {
  const { activities } = useActivities();
  return (
    <View style={styles.container}>
      {activities.map((activity) => (
        <Text key={activity.id}>
          {activity.steps} steps on {new Date(activity.date).toLocaleDateString()}
        </Text>
      ))}
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
