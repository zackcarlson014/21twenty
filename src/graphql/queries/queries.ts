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
export const getSet = /* GraphQL */ `
  query GetSet($id: ID!) {
    getSet(id: $id) {
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
export const listSets = /* GraphQL */ `
  query ListSets(
    $filter: ModelSetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSets(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const setsByWorkoutID = /* GraphQL */ `
  query SetsByWorkoutID(
    $workoutID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    setsByWorkoutID(
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
