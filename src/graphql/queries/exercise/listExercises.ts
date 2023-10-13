const listExercises = /* GraphQL */ `
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

export { listExercises };
