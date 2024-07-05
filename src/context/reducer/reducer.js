export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_THE_LIST_OF_FALLEN": {
      return {
        ...state,
        students: action.students,
      };
    }
    default: {
      return state;
    }
  }
};
