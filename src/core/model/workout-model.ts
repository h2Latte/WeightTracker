export interface Workout {
    date: Date,
    type: "pull" | "push" | "legs",
    exercises: Exercise[]
}

export type WorkoutFormControl = {[Key in keyof Omit<Workout, 'exercises'>]: Workout[Key] | null};

export type ExercisesFormControl = { collection: { [Key in keyof Exercise]: Exercise[Key] | null }[]}

type RepsEnum = 6 | 8 | 10 | 12 | 15;

export interface Exercise {
    name: string,
    weight: number | 'PDC',
    repNumber: RepsEnum,
    setNumber: 3 | 4;
}
