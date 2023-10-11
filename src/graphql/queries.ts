/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWorkout = /* GraphQL */ `
  query GetWorkout($id: ID!) {
    getWorkout(id: $id) {
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
export const listWorkouts = /* GraphQL */ `
  query ListWorkouts(
    $filter: ModelWorkoutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Bouts {
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
      nextToken
      __typename
    }
  }
`;
export const getBout = /* GraphQL */ `
  query GetBout($id: ID!) {
    getBout(id: $id) {
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
export const listBouts = /* GraphQL */ `
  query ListBouts(
    $filter: ModelBoutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const boutsByWorkoutID = /* GraphQL */ `
  query BoutsByWorkoutID(
    $workoutID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBoutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    boutsByWorkoutID(
      workoutID: $workoutID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getExercise = /* GraphQL */ `
  query GetExercise($id: ID!) {
    getExercise(id: $id) {
      id
      name
      category
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listExercises = /* GraphQL */ `
  query ListExercises(
    $filter: ModelExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        category
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getHabit = /* GraphQL */ `
  query GetHabit($id: ID!) {
    getHabit(id: $id) {
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
export const listHabits = /* GraphQL */ `
  query ListHabits(
    $filter: ModelHabitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHabits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        category
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
