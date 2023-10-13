const getSet = /* GraphQL */ `
  query GetSet($id: ID!) {
    getSet(id: $id) {
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

export { getSet };
