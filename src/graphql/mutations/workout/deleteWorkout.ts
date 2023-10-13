const deleteWorkout = /* GraphQL */ `
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

export { deleteWorkout };