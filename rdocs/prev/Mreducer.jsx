export function mreducer(state, action) {
  switch (action.type) {
    case "changed_selection": {
      return {
        ...state,
        selectedId: action.contactId,
      };
    }
    case "edited_message": {
      return {
        ...state,
        messages: {
          ...state.message,

          [state.selectedId]: action.message,
        },
      };
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
