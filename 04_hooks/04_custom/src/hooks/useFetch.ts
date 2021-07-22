import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

interface IData {
  message: string;
  status: string;
}

export const useFetch = (url: string) => {
  const [data, setData] = useState<IData | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getData = useCallback(async () => {
    try {
      setIsLoading(true);

      const { data } = await axios.get(url);

      if (data.status) {
        setData(data);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data, error, isLoading };
};
