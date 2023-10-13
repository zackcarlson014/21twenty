const listHabits = /* GraphQL */ `
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

export { listHabits };
