import axios from 'axios';
import {useCallback, useState} from 'react';
import {API} from '../constants/API';

export const STATUS = {
  INITIAL: 'INITIAL',
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
};

export const useFetchData = (setData, queryParams = []) => {
  const [status, setStatus] = useState(STATUS.INITIAL);

  const params = queryParams.reduce((accum, currValue) => {
    return accum + currValue + '&';
  }, '?');

  console.log(params);
  const fetch = () => {
    setStatus(STATUS.LOADING);
    axios
      .get(`${API}${params}`)
      .then(res => {
        setStatus(STATUS.SUCCESS);
        setData(res.data);
      })
      .catch(err => {
        setStatus(STATUS.ERROR);
        console.log(err, 'error');
      });
  };

  return [fetch, status];
};
