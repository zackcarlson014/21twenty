const createWorkout = /* GraphQL */ `
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

export { createWorkout };