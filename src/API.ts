/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateWorkoutInput = {
  id?: string | null,
  moodStart?: number | null,
  moodEnd?: number | null,
  startTime?: string | null,
  endTime?: string | null,
};

export type ModelWorkoutConditionInput = {
  moodStart?: ModelIntInput | null,
  moodEnd?: ModelIntInput | null,
  startTime?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  and?: Array< ModelWorkoutConditionInput | null > | null,
  or?: Array< ModelWorkoutConditionInput | null > | null,
  not?: ModelWorkoutConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Workout = {
  __typename: "Workout",
  id: string,
  Bouts?: ModelSetConnection | null,
  moodStart?: number | null,
  moodEnd?: number | null,
  startTime?: string | null,
  endTime?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelSetConnection = {
  __typename: "ModelSetConnection",
  items:  Array<Set | null >,
  nextToken?: string | null,
};

export type Set = {
  __typename: "Set",
  id: string,
  Exercise?: Exercise | null,
  reps?: number | null,
  workoutID: string,
  weight?: string | null,
  equipment?: string | null,
  variation?: string | null,
  createdAt: string,
  updatedAt: string,
  setExerciseId?: string | null,
};

export type Exercise = {
  __typename: "Exercise",
  id: string,
  name?: string | null,
  category?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateWorkoutInput = {
  id: string,
  moodStart?: number | null,
  moodEnd?: number | null,
  startTime?: string | null,
  endTime?: string | null,
};

export type DeleteWorkoutInput = {
  id: string,
};

export type CreateSetInput = {
  id?: string | null,
  reps?: number | null,
  workoutID: string,
  weight?: string | null,
  equipment?: string | null,
  variation?: string | null,
  setExerciseId?: string | null,
};

export type ModelSetConditionInput = {
  reps?: ModelIntInput | null,
  workoutID?: ModelIDInput | null,
  weight?: ModelStringInput | null,
  equipment?: ModelStringInput | null,
  variation?: ModelStringInput | null,
  and?: Array< ModelSetConditionInput | null > | null,
  or?: Array< ModelSetConditionInput | null > | null,
  not?: ModelSetConditionInput | null,
  setExerciseId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateSetInput = {
  id: string,
  reps?: number | null,
  workoutID?: string | null,
  weight?: string | null,
  equipment?: string | null,
  variation?: string | null,
  setExerciseId?: string | null,
};

export type DeleteSetInput = {
  id: string,
};

export type CreateExerciseInput = {
  id?: string | null,
  name?: string | null,
  category?: string | null,
};

export type ModelExerciseConditionInput = {
  name?: ModelStringInput | null,
  category?: ModelStringInput | null,
  and?: Array< ModelExerciseConditionInput | null > | null,
  or?: Array< ModelExerciseConditionInput | null > | null,
  not?: ModelExerciseConditionInput | null,
};

export type UpdateExerciseInput = {
  id: string,
  name?: string | null,
  category?: string | null,
};

export type DeleteExerciseInput = {
  id: string,
};

export type CreateHabitInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  category?: string | null,
};

export type ModelHabitConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  category?: ModelStringInput | null,
  and?: Array< ModelHabitConditionInput | null > | null,
  or?: Array< ModelHabitConditionInput | null > | null,
  not?: ModelHabitConditionInput | null,
};

export type Habit = {
  __typename: "Habit",
  id: string,
  name: string,
  description?: string | null,
  category?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateHabitInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  category?: string | null,
};

export type DeleteHabitInput = {
  id: string,
};

export type ModelWorkoutFilterInput = {
  id?: ModelIDInput | null,
  moodStart?: ModelIntInput | null,
  moodEnd?: ModelIntInput | null,
  startTime?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  and?: Array< ModelWorkoutFilterInput | null > | null,
  or?: Array< ModelWorkoutFilterInput | null > | null,
  not?: ModelWorkoutFilterInput | null,
};

export type ModelWorkoutConnection = {
  __typename: "ModelWorkoutConnection",
  items:  Array<Workout | null >,
  nextToken?: string | null,
};

export type ModelSetFilterInput = {
  id?: ModelIDInput | null,
  reps?: ModelIntInput | null,
  workoutID?: ModelIDInput | null,
  weight?: ModelStringInput | null,
  equipment?: ModelStringInput | null,
  variation?: ModelStringInput | null,
  and?: Array< ModelSetFilterInput | null > | null,
  or?: Array< ModelSetFilterInput | null > | null,
  not?: ModelSetFilterInput | null,
  setExerciseId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelExerciseFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  category?: ModelStringInput | null,
  and?: Array< ModelExerciseFilterInput | null > | null,
  or?: Array< ModelExerciseFilterInput | null > | null,
  not?: ModelExerciseFilterInput | null,
};

export type ModelExerciseConnection = {
  __typename: "ModelExerciseConnection",
  items:  Array<Exercise | null >,
  nextToken?: string | null,
};

export type ModelHabitFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  category?: ModelStringInput | null,
  and?: Array< ModelHabitFilterInput | null > | null,
  or?: Array< ModelHabitFilterInput | null > | null,
  not?: ModelHabitFilterInput | null,
};

export type ModelHabitConnection = {
  __typename: "ModelHabitConnection",
  items:  Array<Habit | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionWorkoutFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  moodStart?: ModelSubscriptionIntInput | null,
  moodEnd?: ModelSubscriptionIntInput | null,
  startTime?: ModelSubscriptionStringInput | null,
  endTime?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionWorkoutFilterInput | null > | null,
  or?: Array< ModelSubscriptionWorkoutFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionSetFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  reps?: ModelSubscriptionIntInput | null,
  workoutID?: ModelSubscriptionIDInput | null,
  weight?: ModelSubscriptionStringInput | null,
  equipment?: ModelSubscriptionStringInput | null,
  variation?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSetFilterInput | null > | null,
  or?: Array< ModelSubscriptionSetFilterInput | null > | null,
};

export type ModelSubscriptionExerciseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionExerciseFilterInput | null > | null,
  or?: Array< ModelSubscriptionExerciseFilterInput | null > | null,
};

export type ModelSubscriptionHabitFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionHabitFilterInput | null > | null,
  or?: Array< ModelSubscriptionHabitFilterInput | null > | null,
};

export type CreateWorkoutMutationVariables = {
  input: CreateWorkoutInput,
  condition?: ModelWorkoutConditionInput | null,
};

export type CreateWorkoutMutation = {
  createWorkout?:  {
    __typename: "Workout",
    id: string,
    Bouts?:  {
      __typename: "ModelSetConnection",
      items:  Array< {
        __typename: "Set",
        id: string,
        reps?: number | null,
        workoutID: string,
        weight?: string | null,
        equipment?: string | null,
        variation?: string | null,
        createdAt: string,
        updatedAt: string,
        setExerciseId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    moodStart?: number | null,
    moodEnd?: number | null,
    startTime?: string | null,
    endTime?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWorkoutMutationVariables = {
  input: UpdateWorkoutInput,
  condition?: ModelWorkoutConditionInput | null,
};

export type UpdateWorkoutMutation = {
  updateWorkout?:  {
    __typename: "Workout",
    id: string,
    Bouts?:  {
      __typename: "ModelSetConnection",
      items:  Array< {
        __typename: "Set",
        id: string,
        reps?: number | null,
        workoutID: string,
        weight?: string | null,
        equipment?: string | null,
        variation?: string | null,
        createdAt: string,
        updatedAt: string,
        setExerciseId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    moodStart?: number | null,
    moodEnd?: number | null,
    startTime?: string | null,
    endTime?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWorkoutMutationVariables = {
  input: DeleteWorkoutInput,
  condition?: ModelWorkoutConditionInput | null,
};

export type DeleteWorkoutMutation = {
  deleteWorkout?:  {
    __typename: "Workout",
    id: string,
    Bouts?:  {
      __typename: "ModelSetConnection",
      items:  Array< {
        __typename: "Set",
        id: string,
        reps?: number | null,
        workoutID: string,
        weight?: string | null,
        equipment?: string | null,
        variation?: string | null,
        createdAt: string,
        updatedAt: string,
        setExerciseId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    moodStart?: number | null,
    moodEnd?: number | null,
    startTime?: string | null,
    endTime?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSetMutationVariables = {
  input: CreateSetInput,
  condition?: ModelSetConditionInput | null,
};

export type CreateSetMutation = {
  createSet?:  {
    __typename: "Set",
    id: string,
    Exercise?:  {
      __typename: "Exercise",
      id: string,
      name?: string | null,
      category?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    reps?: number | null,
    workoutID: string,
    weight?: string | null,
    equipment?: string | null,
    variation?: string | null,
    createdAt: string,
    updatedAt: string,
    setExerciseId?: string | null,
  } | null,
};

export type UpdateSetMutationVariables = {
  input: UpdateSetInput,
  condition?: ModelSetConditionInput | null,
};

export type UpdateSetMutation = {
  updateSet?:  {
    __typename: "Set",
    id: string,
    Exercise?:  {
      __typename: "Exercise",
      id: string,
      name?: string | null,
      category?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    reps?: number | null,
    workoutID: string,
    weight?: string | null,
    equipment?: string | null,
    variation?: string | null,
    createdAt: string,
    updatedAt: string,
    setExerciseId?: string | null,
  } | null,
};

export type DeleteSetMutationVariables = {
  input: DeleteSetInput,
  condition?: ModelSetConditionInput | null,
};

export type DeleteSetMutation = {
  deleteSet?:  {
    __typename: "Set",
    id: string,
    Exercise?:  {
      __typename: "Exercise",
      id: string,
      name?: string | null,
      category?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    reps?: number | null,
    workoutID: string,
    weight?: string | null,
    equipment?: string | null,
    variation?: string | null,
    createdAt: string,
    updatedAt: string,
    setExerciseId?: string | null,
  } | null,
};

export type CreateExerciseMutationVariables = {
  input: CreateExerciseInput,
  condition?: ModelExerciseConditionInput | null,
};

export type CreateExerciseMutation = {
  createExercise?:  {
    __typename: "Exercise",
    id: string,
    name?: string | null,
    category?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateExerciseMutationVariables = {
  input: UpdateExerciseInput,
  condition?: ModelExerciseConditionInput | null,
};

export type UpdateExerciseMutation = {
  updateExercise?:  {
    __typename: "Exercise",
    id: string,
    name?: string | null,
    category?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteExerciseMutationVariables = {
  input: DeleteExerciseInput,
  condition?: ModelExerciseConditionInput | null,
};

export type DeleteExerciseMutation = {
  deleteExercise?:  {
    __typename: "Exercise",
    id: string,
    name?: string | null,
    category?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateHabitMutationVariables = {
  input: CreateHabitInput,
  condition?: ModelHabitConditionInput | null,
};

export type CreateHabitMutation = {
  createHabit?:  {
    __typename: "Habit",
    id: string,
    name: string,
    description?: string | null,
    category?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateHabitMutationVariables = {
  input: UpdateHabitInput,
  condition?: ModelHabitConditionInput | null,
};

export type UpdateHabitMutation = {
  updateHabit?:  {
    __typename: "Habit",
    id: string,
    name: string,
    description?: string | null,
    category?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteHabitMutationVariables = {
  input: DeleteHabitInput,
  condition?: ModelHabitConditionInput | null,
};

export type DeleteHabitMutation = {
  deleteHabit?:  {
    __typename: "Habit",
    id: string,
    name: string,
    description?: string | null,
    category?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetWorkoutQueryVariables = {
  id: string,
};

export type GetWorkoutQuery = {
  getWorkout?:  {
    __typename: "Workout",
    id: string,
    Bouts?:  {
      __typename: "ModelSetConnection",
      items:  Array< {
        __typename: "Set",
        id: string,
        reps?: number | null,
        workoutID: string,
        weight?: string | null,
        equipment?: string | null,
        variation?: string | null,
        createdAt: string,
        updatedAt: string,
        setExerciseId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    moodStart?: number | null,
    moodEnd?: number | null,
    startTime?: string | null,
    endTime?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWorkoutsQueryVariables = {
  filter?: ModelWorkoutFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkoutsQuery = {
  listWorkouts?:  {
    __typename: "ModelWorkoutConnection",
    items:  Array< {
      __typename: "Workout",
      id: string,
      Bouts?:  {
        __typename: "ModelSetConnection",
        nextToken?: string | null,
      } | null,
      moodStart?: number | null,
      moodEnd?: number | null,
      startTime?: string | null,
      endTime?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSetQueryVariables = {
  id: string,
};

export type GetSetQuery = {
  getSet?:  {
    __typename: "Set",
    id: string,
    Exercise?:  {
      __typename: "Exercise",
      id: string,
      name?: string | null,
      category?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    reps?: number | null,
    workoutID: string,
    weight?: string | null,
    equipment?: string | null,
    variation?: string | null,
    createdAt: string,
    updatedAt: string,
    setExerciseId?: string | null,
  } | null,
};

export type ListSetsQueryVariables = {
  filter?: ModelSetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSetsQuery = {
  listSets?:  {
    __typename: "ModelSetConnection",
    items:  Array< {
      __typename: "Set",
      id: string,
      Exercise?:  {
        __typename: "Exercise",
        id: string,
        name?: string | null,
        category?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      reps?: number | null,
      workoutID: string,
      weight?: string | null,
      equipment?: string | null,
      variation?: string | null,
      createdAt: string,
      updatedAt: string,
      setExerciseId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SetsByWorkoutIDQueryVariables = {
  workoutID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SetsByWorkoutIDQuery = {
  setsByWorkoutID?:  {
    __typename: "ModelSetConnection",
    items:  Array< {
      __typename: "Set",
      id: string,
      Exercise?:  {
        __typename: "Exercise",
        id: string,
        name?: string | null,
        category?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      reps?: number | null,
      workoutID: string,
      weight?: string | null,
      equipment?: string | null,
      variation?: string | null,
      createdAt: string,
      updatedAt: string,
      setExerciseId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetExerciseQueryVariables = {
  id: string,
};

export type GetExerciseQuery = {
  getExercise?:  {
    __typename: "Exercise",
    id: string,
    name?: string | null,
    category?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListExercisesQueryVariables = {
  filter?: ModelExerciseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExercisesQuery = {
  listExercises?:  {
    __typename: "ModelExerciseConnection",
    items:  Array< {
      __typename: "Exercise",
      id: string,
      name?: string | null,
      category?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetHabitQueryVariables = {
  id: string,
};

export type GetHabitQuery = {
  getHabit?:  {
    __typename: "Habit",
    id: string,
    name: string,
    description?: string | null,
    category?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListHabitsQueryVariables = {
  filter?: ModelHabitFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHabitsQuery = {
  listHabits?:  {
    __typename: "ModelHabitConnection",
    items:  Array< {
      __typename: "Habit",
      id: string,
      name: string,
      description?: string | null,
      category?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateWorkoutSubscriptionVariables = {
  filter?: ModelSubscriptionWorkoutFilterInput | null,
};

export type OnCreateWorkoutSubscription = {
  onCreateWorkout?:  {
    __typename: "Workout",
    id: string,
    Bouts?:  {
      __typename: "ModelSetConnection",
      items:  Array< {
        __typename: "Set",
        id: string,
        reps?: number | null,
        workoutID: string,
        weight?: string | null,
        equipment?: string | null,
        variation?: string | null,
        createdAt: string,
        updatedAt: string,
        setExerciseId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    moodStart?: number | null,
    moodEnd?: number | null,
    startTime?: string | null,
    endTime?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWorkoutSubscriptionVariables = {
  filter?: ModelSubscriptionWorkoutFilterInput | null,
};

export type OnUpdateWorkoutSubscription = {
  onUpdateWorkout?:  {
    __typename: "Workout",
    id: string,
    Bouts?:  {
      __typename: "ModelSetConnection",
      items:  Array< {
        __typename: "Set",
        id: string,
        reps?: number | null,
        workoutID: string,
        weight?: string | null,
        equipment?: string | null,
        variation?: string | null,
        createdAt: string,
        updatedAt: string,
        setExerciseId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    moodStart?: number | null,
    moodEnd?: number | null,
    startTime?: string | null,
    endTime?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWorkoutSubscriptionVariables = {
  filter?: ModelSubscriptionWorkoutFilterInput | null,
};

export type OnDeleteWorkoutSubscription = {
  onDeleteWorkout?:  {
    __typename: "Workout",
    id: string,
    Bouts?:  {
      __typename: "ModelSetConnection",
      items:  Array< {
        __typename: "Set",
        id: string,
        reps?: number | null,
        workoutID: string,
        weight?: string | null,
        equipment?: string | null,
        variation?: string | null,
        createdAt: string,
        updatedAt: string,
        setExerciseId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    moodStart?: number | null,
    moodEnd?: number | null,
    startTime?: string | null,
    endTime?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSetSubscriptionVariables = {
  filter?: ModelSubscriptionSetFilterInput | null,
};

export type OnCreateSetSubscription = {
  onCreateSet?:  {
    __typename: "Set",
    id: string,
    Exercise?:  {
      __typename: "Exercise",
      id: string,
      name?: string | null,
      category?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    reps?: number | null,
    workoutID: string,
    weight?: string | null,
    equipment?: string | null,
    variation?: string | null,
    createdAt: string,
    updatedAt: string,
    setExerciseId?: string | null,
  } | null,
};

export type OnUpdateSetSubscriptionVariables = {
  filter?: ModelSubscriptionSetFilterInput | null,
};

export type OnUpdateSetSubscription = {
  onUpdateSet?:  {
    __typename: "Set",
    id: string,
    Exercise?:  {
      __typename: "Exercise",
      id: string,
      name?: string | null,
      category?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    reps?: number | null,
    workoutID: string,
    weight?: string | null,
    equipment?: string | null,
    variation?: string | null,
    createdAt: string,
    updatedAt: string,
    setExerciseId?: string | null,
  } | null,
};

export type OnDeleteSetSubscriptionVariables = {
  filter?: ModelSubscriptionSetFilterInput | null,
};

export type OnDeleteSetSubscription = {
  onDeleteSet?:  {
    __typename: "Set",
    id: string,
    Exercise?:  {
      __typename: "Exercise",
      id: string,
      name?: string | null,
      category?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    reps?: number | null,
    workoutID: string,
    weight?: string | null,
    equipment?: string | null,
    variation?: string | null,
    createdAt: string,
    updatedAt: string,
    setExerciseId?: string | null,
  } | null,
};

export type OnCreateExerciseSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseFilterInput | null,
};

export type OnCreateExerciseSubscription = {
  onCreateExercise?:  {
    __typename: "Exercise",
    id: string,
    name?: string | null,
    category?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateExerciseSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseFilterInput | null,
};

export type OnUpdateExerciseSubscription = {
  onUpdateExercise?:  {
    __typename: "Exercise",
    id: string,
    name?: string | null,
    category?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteExerciseSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseFilterInput | null,
};

export type OnDeleteExerciseSubscription = {
  onDeleteExercise?:  {
    __typename: "Exercise",
    id: string,
    name?: string | null,
    category?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateHabitSubscriptionVariables = {
  filter?: ModelSubscriptionHabitFilterInput | null,
};

export type OnCreateHabitSubscription = {
  onCreateHabit?:  {
    __typename: "Habit",
    id: string,
    name: string,
    description?: string | null,
    category?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateHabitSubscriptionVariables = {
  filter?: ModelSubscriptionHabitFilterInput | null,
};

export type OnUpdateHabitSubscription = {
  onUpdateHabit?:  {
    __typename: "Habit",
    id: string,
    name: string,
    description?: string | null,
    category?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteHabitSubscriptionVariables = {
  filter?: ModelSubscriptionHabitFilterInput | null,
};

export type OnDeleteHabitSubscription = {
  onDeleteHabit?:  {
    __typename: "Habit",
    id: string,
    name: string,
    description?: string | null,
    category?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
