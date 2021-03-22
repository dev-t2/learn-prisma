import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import { DataType, loadDataType, useAxiosType } from '../index';

const useAxios: useAxiosType = url => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<DataType>();
  const [error, setError] = useState<Error>();

  const loadData: loadDataType = useCallback(async url => {
    try {
      setIsLoading(true);

      const { data } = await axios.get(url);

      setData(data);
      setError(undefined);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData(url);
  }, [loadData, url]);

  return [isLoading, data, error];
};

export default useAxios;
