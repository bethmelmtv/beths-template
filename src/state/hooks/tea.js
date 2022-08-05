import { useContext, useEffect, useState } from 'react';
import { TeaStateContext } from '../context/TeaContext';
import {
  getTeaFamiliesWithTeas,
  removeTeaFamily,
  // addTeaFamily,
  updateTeaFamily,
  // addTea,
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

// function createDispatchActions(dispatch) {
//   return function createAction({ service, type, success }) {
//     return async (...args) => {
//       const { data, error } = await service(...args);

//       if (error) showError(error.message);

//       if (data) {
//         dispatch({ type, payload: data });
//         const successMessage = success(data);
//         showSuccess(successMessage);
//       }
//     };
//   };
// }

export function useTeaActions() {
  const { familiesDispatch } = useContext(TeaStateContext);

  // const createAction = createDispatchActions(skincareDispatch);

  // const add = createAction({
  //   service: getAllSkincare,
  //   type: 'add',
  //   success: (data) => `Added new skincare "${data.name}"`,
  // });

  const add = async (families) => {
    const { data, error } = await getTeaFamiliesWithTeas();
    if (error) {
      showError(error.message);
    }
    if (data) {
      familiesDispatch({ type: 'add', payload: data });
      showSuccess(`Added ${data.name}`);
    }
  };

  const remove = async (families) => {
    const { data, error } = await removeTeaFamily();
    if (error) {
      showError(error.message);
    }
    if (data) {
      familiesDispatch({ type: 'delete', payload: data });
      showSuccess(`Deleted ${data.name}`);
    }
  };

  const update = async (families) => {
    const { data, error } = await updateTeaFamily();
    if (error) {
      showError(error.message);
    }
    if (data) {
      familiesDispatch({ type: 'update', payload: data });
      showSuccess(`Updated ${data.name}`);
    }
  };

  return { add, remove, update };
}
