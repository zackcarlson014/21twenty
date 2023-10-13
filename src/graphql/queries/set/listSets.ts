const listSets = /* GraphQL */ `
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

export { listSets };
