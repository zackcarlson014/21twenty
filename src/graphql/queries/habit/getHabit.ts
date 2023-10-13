const getHabit = /* GraphQL */ `
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

export { getHabit };
