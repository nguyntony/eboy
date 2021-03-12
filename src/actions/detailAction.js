import axios from "axios";
import { gameDetailsURL, gameScreenshotURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  // this syntax looks weird but what is happening is that the loadDetail fn is returning another function, one that will do our asynchronous action
  const detailData = await axios.get(gameDetailsURL(id));
  const screenshotData = await axios.get(gameScreenshotURL(id));
  // I can wrap this around in a try and catch block in order to error handle.
  // try {
  //   const screenshotData = await axios.get(gameScreenshotURL(id))
  // } catch (err) {
  //   const responseError = err
  // }

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screenshots: screenshotData.data,
    },
    // this object here, is structured the same in the detailReducer file, we have a blueprint state object. the difference is, is that this is the action object and when we dispatch it, the data that we have sent along in this action object, will be access then stored to our state object that is in the reducer file.
  });
};
