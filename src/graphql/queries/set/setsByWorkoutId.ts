const setsByWorkoutID = /* GraphQL */ `
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

export { setsByWorkoutID };
