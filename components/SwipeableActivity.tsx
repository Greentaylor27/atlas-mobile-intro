import { Alert, StyleSheet, Text, View } from "react-native";
import ActivityItem from "./Activity";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { useActivities } from "@/hooks/useActivities";
import { router } from "expo-router"

export default function SwipeableActivity({ activity }: { activity: any }) {
    const {deleteAnActivity} = useActivities();


    return (
        <View key={activity.id} style={styles.view}>
            <Swipeable
                renderLeftActions={() => <Action text="Delete" />}
                renderRightActions={() => <Action text="Delete" />}
                onSwipeableOpen={() => {
                    Alert.alert("You are trying to delete something");
                    deleteAnActivity(activity.id);
                    router.replace("/");
                }}
            >
                <ActivityItem activity={activity} />
            </Swipeable>
        </View>
    );
}

export const Action = ({ text }: { text: string }) => {
    return (
        <View style={styles.actionView}>
            <Text style={styles.actionText}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {},
    actionView: {},
    actionText: {},
});
