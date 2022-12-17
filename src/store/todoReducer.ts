export const todoReducer = (state: Todo[], action: ActionType) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: state.length + 1,
          text: action.text,
          done: false,
        },
      ];
    case "REMOVE":
      return state.filter(({ id }) => id !== action.id);

    default:
      throw new Error();
  }
};

export const initialTodos = [
  {
    id: 1,
    text: "shopping",
    done: true,
  },
];
