/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useMemo,
} from 'react';

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';

import { useRouter } from 'next/router';
import { auth } from '../config/firebase';

interface IAuth {
  user: User | null | undefined;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
  error: string | null;
  loading: boolean;
}

const AuthContext = createContext<IAuth>({
  user: null,
  signUp: async () => {},
  signIn: async () => {},
  logOut: async () => {},
  error: null,
  loading: false,
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>();
  const [initialLoading, setInitialLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // Logged in...
          setUser(user);
          setLoading(false);
        } else {
          // Not logged in...
          setUser(null);
          setLoading(true);
          router.push('/login');
        }

        setInitialLoading(false);
      }),
    [auth],
  );

  const signUp = async (email: string, password: string) => {
    setLoading(true);

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      setUser(userCredentials.user);
      router.push('/');
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const signIn = async (email: string, password: string) => {
    setLoading(false);
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      setUser(userCredentials.user);
      router.push('/');
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const logOut = async () => {
    setLoading(true);
    try {
      const res = signOut(auth);
      setUser(null);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const memoedValue = useMemo(
    () => ({ user, signUp, signIn, error, loading, logOut }),
    [user, loading],
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      {!initialLoading && children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
