import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = "http://localhost:8080";

export function useFetch(
  path: string,
  method: string = "get",
  immediate = false
) {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [executeCounter, setExecuteCounter] = useState(0);

  function execute() {
    setExecuteCounter(executeCounter + 1);
  }

  useEffect(() => {
    setLoading(true);
    setError(false);

    axios({ method, url: `${baseUrl}${path}` })
      .then((response) => setData(response.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [executeCounter]);
  return { data, loading, error, execute };
}
