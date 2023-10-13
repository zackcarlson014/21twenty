const getWorkout = /* GraphQL */ `
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

export { getWorkout };
