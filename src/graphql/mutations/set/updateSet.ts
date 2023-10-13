const updateSet = /* GraphQL */ `
  mutation UpdateSet(
    $input: UpdateSetInput!
    $condition: ModelSetConditionInput
  ) {
    updateSet(input: $input, condition: $condition) {
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

export { updateSet };