import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";

type Activity = {
    id: number;
    steps: number;
    date: number;
}

export function useActivities() {
    const [activities, setActivities] = useState<Activity[]>([]);
    const db = useSQLiteContext();

    function getActivities() {
        return db.getAllSync<Activity>("SELECT * FROM activities ORDER BY date DESC") as Activity[];
    }

    function insertActivity(steps: number, date: Date) {
        db.execSync(`INSERT INTO activities (steps, date) VALUES (${steps}, ${date.getTime()})`);
        reload();
    }

    function deleteAllActivities() {
        db.execSync(`DELETE FROM activities`);
        reload();
    }

    function deleteAnActivity(id: number) {
        db.execSync(`DELETE FROM activities WHERE id = ${id}`);
        reload();
    }

    function reload() {
        const data = getActivities();
        setActivities(data);
    }

    useEffect(() => {
        reload();
    }, []);

    return { getActivities, activities, insertActivity, deleteAllActivities, deleteAnActivity };
}
