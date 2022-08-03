import { useContext, useEffect, useMemo, useState } from 'react';
import { SkincareStateContext } from '../context/SkincareContext';
import { getAllSkincare } from '../services/skincare-service.js';
import { SkincareDispatchContext } from '../context/SkincareContext.jsx';
import { showSuccess, showError } from '../services/toaster.js';

export function useFamilies() {
  const [error, setError] = useState(null);
  const { skincare } = useContext(SkincareStateContext);
  const { skincareDispatch } = useContext(SkincareDispatchContext);

  useEffect(() => {
    if (skincare) return;
    let ignore = false;

    const fetch = async () => {
      const { data, error } = await getAllSkincare();
      if (ignore) return;

      if (error) {
        setError(error);
      }
      if (data) {
        skincareDispatch({ type: 'load', payload: data });
      }
    };

    fetch();

    return () => (ignore = true);
  }, []);

  return { skincare, error };
}

function createDispatchActions(dispatch) {
  return function createAction({ service, type, success }) {
    return async (...args) => {
      const { data, error } = await service(...args);

      if (error) showError(error.message);

      if (data) {
        dispatch({ type, payload: data });
        const successMessage = success(data);
        showSuccess(successMessage);
      }
    };
  };
}

export function useSkincareActions() {
  const { skincareDispatch } = useContext(SkincareDispatchContext);

  const createAction = createDispatchActions(skincareDispatch);

  const add = createAction({
    service: getAllSkincare, //where do i get this line from?
    type: 'add',
    success: (data) => `Added new skincare "${data.name}"`,
  });

  return useMemo(() => ({ add, remove, update }), [skincareDispatch]);
}
