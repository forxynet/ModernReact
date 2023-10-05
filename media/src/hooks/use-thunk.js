import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

export function useThunk(thunk) {
    const [isLoading, SetIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
  
    const runThunk = useCallback(
      (arg) => {
        SetIsLoading(true);
        dispatch(thunk(arg))
          .unwrap()
          .catch((err) => setError(err))
          .finally(() => {
            SetIsLoading(false);
          });
      },
      [dispatch, thunk]
    );
  
    return [runThunk, isLoading, error];
  }