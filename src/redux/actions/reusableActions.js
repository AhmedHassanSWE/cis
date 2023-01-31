import api from "../api";
import { LOADING } from "./types";

export const reduxGet = (endPoint, type) => (dispatch) => {
  dispatch({
    type: LOADING,
  });
  api.get(endPoint).then((res) => {
    dispatch({
      type: type,
      payload: res?.data,
    });
  });
};

export const emptyAction = (type) => (dispatch) => {
  dispatch({
    type,
  });
};

export const reduxPost =
  (endPoint, data, callBack, setErr, setLoading, type) => (dispatch) => {
    setLoading(true);
    api
      .post(endPoint, data)
      .then((res) => {
        callBack(res);
        setLoading(false);
        dispatch({
          type: type,
          payload: res.data,
        });
      })
      .catch((err) => {
        setErr(err?.response);
        setLoading(false);
      });
  };
