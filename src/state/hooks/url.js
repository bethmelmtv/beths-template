import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export function useSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [params, setParamsObject] = useState({});

  useEffect(() => {
    // eslint-disable-next-line max-len
    setParamsObject(Object.fromEntries(searchParams.entries())); //what does ths line do
  }, [searchParams.toString()]);

  const setParams = (search) => {
    const clean = removeEmptyKeys(search);
    setSearchParams(clean);
  };

  return { params, setParams };
}

export function removeEmptyKeys(obj) {
  const filtered = Object.entries(obj).filter(
    ([, value]) => value !== undefined && value !== null && value !== ''
  );
  return Object.fromEntries(filtered);
}
