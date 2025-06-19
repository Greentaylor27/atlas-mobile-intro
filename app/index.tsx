import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { useActivities } from "@/hooks/useActivities";
import { FlashList } from "@shopify/flash-list";
import ActivityItem from "@/components/Activity";


export default function Index() {
  const { activities } = useActivities();
  const {deleteAllActivities} = useActivities();


  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlashList
          renderItem={({ item }) => <ActivityItem activity={item} />}
          data={activities}
          estimatedItemSize={50}
        />
      </View>
      <Pressable style={styles.newScreenButton} onPress={() => {
        router.push('/add-activity-screen');
      }}>
        <Text style={styles.buttonText}>Add Activity</Text>
      </Pressable>
      <Pressable style={styles.deleteButton} onPress={() => {
        deleteAllActivities();
        router.replace("/");
      }}>
        <Text style={styles.buttonText}>Delete all activities</Text>
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
  list: {
    width: "50%",
    height: "50%"
  },
  heading: {
    fontSize: 24,
  },
  newScreenButton: {
    backgroundColor: '#1ED2AF',
    padding: 16,
    width: "100%"
  },
  deleteButton: {
    backgroundColor: "#D00414",
    padding: 16,
    width: "100%"
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
