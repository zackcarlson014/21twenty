const updateHabit = /* GraphQL */ `
  mutation UpdateHabit(
    $input: UpdateHabitInput!
    $condition: ModelHabitConditionInput
  ) {
    updateHabit(input: $input, condition: $condition) {
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

export { updateHabit };