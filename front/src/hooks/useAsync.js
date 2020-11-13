import { useReducer, useEffect, useState } from 'react';

const initFetchStatus = {
  error: false,
};

export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export const useAsync = ({ api, reducer, deps = [], initialState = {} }) => {
  const [fetchStatus, setFetchStatus] = useState(initFetchStatus);
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchApi = async () => {
    try {
      const data = await api();
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
