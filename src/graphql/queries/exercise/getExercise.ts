const getExercise = /* GraphQL */ `
  query GetExercise($id: ID!) {
    getExercise(id: $id) {
      id
      name
      category
      createdAt
      updatedAt
      __typename
    }
  }
`;

export { getExercise };