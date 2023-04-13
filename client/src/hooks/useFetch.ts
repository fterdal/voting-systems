import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = "http://localhost:8080";

export function useFetch(path: string) {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`${baseUrl}${path}`)
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return { data, loading, error };
}
