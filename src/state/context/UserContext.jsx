import { createContext, useMemo, useState } from 'react';
import { getUser, getLocalProfile } from '../services/user-service.js';

export const UserStateContext = createContext();
export const UserActionContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(getLocalProfile());

  // const loadProfile = async () => {
  //   const { data, error } = await getProfile;
  // };
  const stateValue = {
    user,
    profile,
  };

  const actionValue = useMemo(
    () => ({
      setUser,
      setProfile,
    }),
    [setUser, setProfile]
  );

  return (
    <UserStateContext.Provider value={stateValue}>
      <UserActionContext.Provider value={actionValue}>
        {children}
      </UserActionContext.Provider>
    </UserStateContext.Provider>
  );
}
