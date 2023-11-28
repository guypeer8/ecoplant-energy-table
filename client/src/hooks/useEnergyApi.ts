import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import { NODE_API } from '../config/api-config';

interface RowData {
  id: string;
  timestamp: string;
  kwh: number;
  pressure: number;
  temp: number;
}

interface Data {
  rows: RowData[];
  count: number;
}

const useEnergyApi = (paginationParams: { page: number; pageSize: number }, startDate: Date | null, endDate: Date | null) => {
    const [error, setError] = useState<unknown | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<Data>({ rows: [], count: 0 });

  const fetchData = async (): Promise<void> => {
    setIsLoading(true);

    try {
      const response: AxiosResponse<Data> = await axios.get(`${NODE_API}/energy`, {
        params: {
          ...paginationParams,
          startTimestamp: startDate?.toISOString(),
          endTimestamp: endDate?.toISOString(),
        },
      });
      setData(response.data);
      setError(null);
    } catch (error) {
      setError(error);
    }
    
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [paginationParams, startDate, endDate]);

  return {
    data, 
    error,
    isLoading,
  };
};

export default useEnergyApi;
