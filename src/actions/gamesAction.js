// action: is an object that describes what it going to happen. { type: "FETCH_GAMES" }
// dispatch: is going to send the action to our reducer and the reducer will do a particular function based on the action type.
// action creator: is a fn that returns an action.
// in the action creator you may also have another key called payload and this will contain data that is grabbed from the front end, such as the userData from a form or input tag

// redux cannot handle async data fetching instead we use redux thunk, it allows us to do asynchronous fetching of data in our action.

import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

// action creator
// to make an async action
export const loadGames = () => async (dispatch) => {
  // fetch axios
  const popularData = await axios.get(popularGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  const newData = await axios.get(newGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newData.data.results,
    },
  });
};
