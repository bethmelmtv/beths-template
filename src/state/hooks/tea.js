import { useContext, useEffect, useState } from 'react';
import { TeaStateContext } from '../context/TeaContext';
import {
  getTeaFamiliesWithTeas,
  removeTeaFamily,
  addTeaFamily,
  updateTeaFamily,
} from '../services/teaService';
import { showSuccess, showError } from '../services/toaster.js';

export function useSimpleFamilies() {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      const response = await getTeaFamiliesWithTeas();
      setResponse(response);
    };
    fetch();
  }, []);

  return response;
}

export function useTeaFamilies() {
  const [error, setError] = useState(null);
  const { families, familiesDispatch } = useContext(TeaStateContext);

  useEffect(() => {
    if (families) return;
    let ignore = false;

    const fetch = async () => {
      const { data, error } = await getTeaFamiliesWithTeas();
      if (ignore) return;

      if (error) {
        setError(error);
      }
      if (data) {
        familiesDispatch({ type: 'load', payload: data });
      }
    };

    fetch();

    return () => (ignore = true);
  }, []);

  return { families: families || [], error };
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

export function useTeaFamilyActions() {
  const { familiesDispatch } = useContext(TeaStateContext);

  const createAction = createDispatchActions(familiesDispatch);

  const add = createAction({
    service: addTeaFamily,
    type: 'add',
    success: (data) => `Added new family ${data.family}`,
  });

  const remove = createAction({
    service: removeTeaFamily,
    type: 'remove',
    success: (data) => `Removed tea family ${data.family}`,
  });

  const update = createAction({
    service: updateTeaFamily,
    type: 'update',
    success: (data) => `Update tea family ${data.family}`,
  });

  return { add, remove, update };
}
