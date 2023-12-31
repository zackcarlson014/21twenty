/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateWorkout = /* GraphQL */ `
  subscription OnCreateWorkout($filter: ModelSubscriptionWorkoutFilterInput) {
    onCreateWorkout(filter: $filter) {
      id
      Bouts {
        items {
          id
          reps
          workoutID
          weight
          equipment
          variation
          createdAt
          updatedAt
          setExerciseId
          __typename
        }
        nextToken
        __typename
      }
      moodStart
      moodEnd
      startTime
      endTime
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateWorkout = /* GraphQL */ `
  subscription OnUpdateWorkout($filter: ModelSubscriptionWorkoutFilterInput) {
    onUpdateWorkout(filter: $filter) {
      id
      Bouts {
        items {
          id
          reps
          workoutID
          weight
          equipment
          variation
          createdAt
          updatedAt
          setExerciseId
          __typename
        }
        nextToken
        __typename
      }
      moodStart
      moodEnd
      startTime
      endTime
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteWorkout = /* GraphQL */ `
  subscription OnDeleteWorkout($filter: ModelSubscriptionWorkoutFilterInput) {
    onDeleteWorkout(filter: $filter) {
      id
      Bouts {
        items {
          id
          reps
          workoutID
          weight
          equipment
          variation
          createdAt
          updatedAt
          setExerciseId
          __typename
        }
        nextToken
        __typename
      }
      moodStart
      moodEnd
      startTime
      endTime
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateSet = /* GraphQL */ `
  subscription OnCreateSet($filter: ModelSubscriptionSetFilterInput) {
    onCreateSet(filter: $filter) {
      id
      Exercise {
        id
        name
        category
        createdAt
        updatedAt
        __typename
      }
      reps
      workoutID
      weight
      equipment
      variation
      createdAt
      updatedAt
      setExerciseId
      __typename
    }
  }
`;
export const onUpdateSet = /* GraphQL */ `
  subscription OnUpdateSet($filter: ModelSubscriptionSetFilterInput) {
    onUpdateSet(filter: $filter) {
      id
      Exercise {
        id
        name
        category
        createdAt
        updatedAt
        __typename
      }
      reps
      workoutID
      weight
      equipment
      variation
      createdAt
      updatedAt
      setExerciseId
      __typename
    }
  }
`;
export const onDeleteSet = /* GraphQL */ `
  subscription OnDeleteSet($filter: ModelSubscriptionSetFilterInput) {
    onDeleteSet(filter: $filter) {
      id
      Exercise {
        id
        name
        category
        createdAt
        updatedAt
        __typename
      }
      reps
      workoutID
      weight
      equipment
      variation
      createdAt
      updatedAt
      setExerciseId
      __typename
    }
  }
`;
export const onCreateExercise = /* GraphQL */ `
  subscription OnCreateExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onCreateExercise(filter: $filter) {
      id
      name
      category
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateExercise = /* GraphQL */ `
  subscription OnUpdateExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onUpdateExercise(filter: $filter) {
      id
      name
      category
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteExercise = /* GraphQL */ `
  subscription OnDeleteExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onDeleteExercise(filter: $filter) {
      id
      name
      category
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateHabit = /* GraphQL */ `
  subscription OnCreateHabit($filter: ModelSubscriptionHabitFilterInput) {
    onCreateHabit(filter: $filter) {
      id
      name
      description
      category
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateHabit = /* GraphQL */ `
  subscription OnUpdateHabit($filter: ModelSubscriptionHabitFilterInput) {
    onUpdateHabit(filter: $filter) {
      id
      name
      description
      category
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteHabit = /* GraphQL */ `
  subscription OnDeleteHabit($filter: ModelSubscriptionHabitFilterInput) {
    onDeleteHabit(filter: $filter) {
      id
      name
      description
      category
      createdAt
      updatedAt
      __typename
    }
  }
`;
