import { useState } from "react";

const useFetch = (route, onReceived) => {
  if (route.includes("api/")) {
    throw Error(
      "when using the useFetch hook, the route should not include the /api/ part"
    );
  }

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const performFetch = (options) => {
    setError(null);
    setIsLoading(true);

    const fetchData = async () => {
      const url = `${process.env.REACT_APP_BASE_SERVER_URL}/api${route}`;

      const res = await fetch(url, { options });

      if (!res.ok) {
        setError(
          `Fetch for ${url} returned an invalid status (${
            res.status
          }). Received: ${JSON.stringify(res)}`
        );
      }

      const jsonResult = await res.json();

      if (jsonResult.success === true) {
        onReceived(jsonResult);
      } else {
        setError(
          jsonResult.msg ||
            `The result from our API did not have an error message. Received: ${JSON.stringify(
              jsonResult
            )}`
        );
      }

      setIsLoading(false);
    };

    fetchData().catch((error) => {
      setError(error);
      setIsLoading(false);
    });
  };

  return { isLoading, error, performFetch };
};

export default useFetch;
