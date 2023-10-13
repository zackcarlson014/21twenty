const createHabit = /* GraphQL */ `
  mutation CreateHabit(
    $input: CreateHabitInput!
    $condition: ModelHabitConditionInput
  ) {
    createHabit(input: $input, condition: $condition) {
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

export { createHabit };