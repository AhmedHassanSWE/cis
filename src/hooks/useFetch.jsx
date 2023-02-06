import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

export const useFetch = (endPoint) => {
  const [data, setData] = React.useState(null);
  const token = useSelector((state) => state.auth?.user?.token);
  console.log("TOKENZ", token);
  React.useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://mahalatmasr.com/cis/public/api/${endPoint}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(response.data);
    })();
  }, []);

  return data;
};
