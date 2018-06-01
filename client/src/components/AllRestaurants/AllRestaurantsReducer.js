const defaultState = {
  selectedRestaurant: {},
};

export default function allRestaurantsReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'SELECT_RESTAURANT': {
      return { ...state, selectedRestaurant: payload };
    }

    default: {
      return state;
    }
  }
}
