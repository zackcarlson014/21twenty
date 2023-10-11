/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWorkout = /* GraphQL */ `
  mutation CreateWorkout(
    $input: CreateWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    createWorkout(input: $input, condition: $condition) {
      id
      Bouts {
        items {
          id
          reps
          workoutID
          createdAt
          updatedAt
          boutExerciseId
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
export const updateWorkout = /* GraphQL */ `
  mutation UpdateWorkout(
    $input: UpdateWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    updateWorkout(input: $input, condition: $condition) {
      id
      Bouts {
        items {
          id
          reps
          workoutID
          createdAt
          updatedAt
          boutExerciseId
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
export const deleteWorkout = /* GraphQL */ `
  mutation DeleteWorkout(
    $input: DeleteWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    deleteWorkout(input: $input, condition: $condition) {
      id
      Bouts {
        items {
          id
          reps
          workoutID
          createdAt
          updatedAt
          boutExerciseId
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
export const createBout = /* GraphQL */ `
  mutation CreateBout(
    $input: CreateBoutInput!
    $condition: ModelBoutConditionInput
  ) {
    createBout(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      boutExerciseId
      __typename
    }
  }
`;
export const updateBout = /* GraphQL */ `
  mutation UpdateBout(
    $input: UpdateBoutInput!
    $condition: ModelBoutConditionInput
  ) {
    updateBout(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      boutExerciseId
      __typename
    }
  }
`;
export const deleteBout = /* GraphQL */ `
  mutation DeleteBout(
    $input: DeleteBoutInput!
    $condition: ModelBoutConditionInput
  ) {
    deleteBout(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      boutExerciseId
      __typename
    }
  }
`;
export const createExercise = /* GraphQL */ `
  mutation CreateExercise(
    $input: CreateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    createExercise(input: $input, condition: $condition) {
      id
      name
      category
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateExercise = /* GraphQL */ `
  mutation UpdateExercise(
    $input: UpdateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    updateExercise(input: $input, condition: $condition) {
      id
      name
      category
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteExercise = /* GraphQL */ `
  mutation DeleteExercise(
    $input: DeleteExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    deleteExercise(input: $input, condition: $condition) {
      id
      name
      category
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createHabit = /* GraphQL */ `
  mutation CreateHabit(
    $input: CreateHabitInput!
    $condition: ModelHabitConditionInput
  ) {
    createHabit(input: $input, condition: $condition) {
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
export const updateHabit = /* GraphQL */ `
  mutation UpdateHabit(
    $input: UpdateHabitInput!
    $condition: ModelHabitConditionInput
  ) {
    updateHabit(input: $input, condition: $condition) {
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
export const deleteHabit = /* GraphQL */ `
  mutation DeleteHabit(
    $input: DeleteHabitInput!
    $condition: ModelHabitConditionInput
  ) {
    deleteHabit(input: $input, condition: $condition) {
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
