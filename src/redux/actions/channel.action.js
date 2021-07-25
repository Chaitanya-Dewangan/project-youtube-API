import {
    CHANNEL_DETAILS_REQUEST,
    CHANNEL_DETAILS_SUCCESS,
    CHANNEL_DETAILS_FAIL,
} from '../actionType';

import request from "../../api";

export const getChannelDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: CHANNEL_DETAILS_REQUEST,
    });
    const { data } = await request("/channels", {
      params: {
        part: "snippet,statistics,contentDetails",
        id
      },
    });
    dispatch({
      type: CHANNEL_DETAILS_SUCCESS,
      payload: data.items[0],
    });
  } catch (err) {
      console.log(err.response.data)
    dispatch({
      type: CHANNEL_DETAILS_FAIL,
      payload: err.response.data,
    });
  }
};



export const checkSubscriptionStatus = (id) => async (dispatch,getState) => {
  try {
    dispatch({
      type: CHANNEL_DETAILS_REQUEST,
    });
    const { data } = await request("/channels", {
      params: {
        part: "snippet,statistics,contentDetails",
        id,
      },
    });
    dispatch({
      type: CHANNEL_DETAILS_SUCCESS,
      payload: data.items[0],
    });
  } catch (err) {
    console.log(err.response.data);
    dispatch({
      type: CHANNEL_DETAILS_FAIL,
      payload: err.response.data,
    });
  }
};