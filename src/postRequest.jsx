import axios from "axios";

export const postRequest = async (
  endPoint,
  data,
  callBack,
  setErr,
  setLoading,
  token
) => {
  setLoading(true);
  axios
    .post(`https://mahalatmasr.com/cis/public/api/${endPoint}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      callBack(res);
      setLoading(false);
    })
    .catch((err) => {
      setErr(err?.response);
      setLoading(false);
    });
};
