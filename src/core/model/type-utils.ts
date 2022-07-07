import type {Workout} from "@/core/model/workout-model";

export type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;


export function convertJsonWorkoutsDates(json: any): Workout[] {
    return json.map((jsonWorkout: { date: string }) => ({...jsonWorkout, date: new Date(jsonWorkout.date)}))
}
