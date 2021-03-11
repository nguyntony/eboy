const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};
// this is the default state that we will have, an object with three different keys with empty arrays.

const gamesReducer = (state = initialState, action) => {
  // the reducer will be a function that will accept the state and action and we are using switch / case to return something based on the action that we dispatch, elsewhere we will use dispatch that will specify which action we want to do.
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        // this is receiving a dispatched action object with these keys.
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
