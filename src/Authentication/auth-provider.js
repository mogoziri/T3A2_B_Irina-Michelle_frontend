import React, { useState, useMemo, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from 'js-cookie';
import * as usersApi from "../API/api-users";

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingInitial, setLoadingInitial] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("user-token");
    Cookies.remove("accessToken");
    setUser(undefined);
    setIsLoggedIn(false);
    navigate("/");
  };

  useEffect(() => {
    if (error) setError(null);
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    usersApi
      .getCurrentUser()
      .then(({ isValid }) => {
        if (isValid) {
          setIsLoggedIn(true);
          setUser(JSON.parse(localStorage.getItem("user-token")));
        }
      })
      .catch(() => {
        logout();
      })
      .finally(() => setLoadingInitial(false));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const signUp = ({ username, password }) => {
    setLoading(true);

    usersApi
      .signUp({ username, password})
      .then((user) => {
        setUser(user);
        setIsLoggedIn(true);
        localStorage.setItem("user-token", JSON.stringify(user));
        navigate("/");
      })
      .catch((error) => {
        // console.log({error})
        setError(error.response.data.data)
      })
      .finally(() => setLoading(false));
  };

  const logIn = ({ username, password }) => {
    setLoading(true);

    usersApi
      .logIn({ username, password })
      .then((user) => {
        setUser(user);
        setIsLoggedIn(true);
        localStorage.setItem("user-token", user);
        navigate("/");
      })
      .catch(() => {
        setError(
          "Sorry, an unexpected error accorded when logging you in. Please reconfirm your username and password."
        );
      })
      .finally(() => setLoading(false));
  };

  const memoedValue = useMemo(
    () => ({
      user,
      loading,
      error,
      isLoggedIn,
      logIn,
      signUp,
      logout,
    }),
    [user, loading, error, isLoggedIn] // eslint-disable-line react-hooks/exhaustive-deps
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
};

// only export the `useAuth` hook instead of the context.
//Use the hook directly and never the context component.
export const useAuth = () => useContext(AuthContext);