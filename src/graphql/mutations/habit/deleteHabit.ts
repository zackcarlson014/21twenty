const deleteHabit = /* GraphQL */ `
  mutation DeleteHabit(
    $input: DeleteHabitInput!
    $condition: ModelHabitConditionInput
  ) {
    deleteHabit(input: $input, condition: $condition) {
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

export { deleteHabit };