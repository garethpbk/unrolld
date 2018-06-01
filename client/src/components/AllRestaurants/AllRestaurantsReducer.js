const defaultState = {
  max: 20,
};

export default function allRestaurantsReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'INCREASE_MAX': {
      return { ...state, max: payload };
    }

    default: {
      return state;
    }
  }
}
