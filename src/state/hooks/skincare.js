import { useContext, useEffect, useState } from 'react';
import { SkincareStateContext } from '../context/SkincareContext';
import { getAllSkincare } from '../services/skincare-service.js';
import { showSuccess, showError } from '../services/toaster.js';

export function useSkincare() {
  const [error, setError] = useState(null);
  const { skincare, skincareDispatch } = useContext(SkincareStateContext);

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

  return { skincare: skincare || [], error };
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

export function useSkincareActions() {
  const { skincareDispatch } = useContext(SkincareStateContext);

  // const createAction = createDispatchActions(skincareDispatch);

  // const add = createAction({
  //   service: getAllSkincare,
  //   type: 'add',
  //   success: (data) => `Added new skincare "${data.name}"`,
  // });

  const add = async (skincare) => {
    const { data, error } = await getAllSkincare();
    if (error) {
      showError(error.message);
    }
    if (data) {
      skincareDispatch({ type: 'add', payload: data });
      showSuccess(`Added ${data.name}`);
    }
  };

  return { add };
}
