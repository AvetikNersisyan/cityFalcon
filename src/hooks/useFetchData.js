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

  const params = queryParams.reduce((accum, currValue, idx, arr) => {
    let paramString = accum + currValue;
    if (idx !== arr.length - 1) {
      paramString += '&';
    }
    return paramString;
  }, '?');

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
