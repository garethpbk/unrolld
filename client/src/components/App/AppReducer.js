const defaultState = {
  restaurants: [],
  burritos: [],
  position: {},
};

export default function appReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    // Update restaurant list in store
    case 'ADD_RESTAURANTS': {
      return { ...state, restaurants: payload };
    }

    // Update burrito list in store
    case 'GET_BURRITOS': {
      return { ...state, burritos: payload.data };
    }

    default: {
      return state;
    }
  }
}
