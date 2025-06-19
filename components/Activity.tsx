import React from 'react';
import { Text, StyleSheet } from 'react-native';

type Activity = {
  id: number;
  steps: number;
  date: number;
};

type Props = {
  activity: Activity;
};

export default function ActivityItem({ activity }: Props) {
  return (
    <Text style={styles.content}>
      {activity.steps} steps on {new Date(activity.date).toLocaleDateString()}
    </Text>
  );
}

const styles = StyleSheet.create({
  content: {
    fontSize: 16,
    marginBottom: 8,
  },
});
