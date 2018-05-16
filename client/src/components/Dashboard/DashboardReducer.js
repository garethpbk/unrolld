const defaultState = {
  restaurants: [],
  burritos: [],
};

export default function dashboardReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'GET_RESTAURANTS_FULFILLED': {
      return {
        ...state,
        restaurants: payload.data,
      };
    }

    case 'GET_BURRITOS_FULFILLED': {
      return {
        ...state,
        burritos: payload.data,
      };
    }

    default: {
      return state;
    }
  }
}
