import { useReducer, useEffect, useState } from 'react';

const initFetchStatus = {
  loading: false,
  error: false,
};

export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export const useAsync = ({ api, reducer, deps = [], initialState = {} }) => {
  const [fetchStatus, setFetchStatus] = useState(initFetchStatus);
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchApi = async () => {
    setFetchStatus({ ...fetchStatus, loading: true });
    try {
      const data = await api();
      setFetchStatus({ ...fetchStatus, loading: false });
      dispatch({ type: FETCH_SUCCESS, data });
    } catch (err) {
      setFetchStatus({ ...fetchStatus, error: err });
    }
  };

  useEffect(() => {
    fetchApi();
  }, deps);
  return { state, fetchStatus, dispatch };
};
