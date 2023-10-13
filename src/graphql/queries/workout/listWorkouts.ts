const listWorkouts = /* GraphQL */ `
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

export { listWorkouts };
