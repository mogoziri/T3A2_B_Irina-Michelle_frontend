import React, { useState, useMemo, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from 'js-cookie';
import * as usersApi from "../API/api-users";


const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState();
  const [error, setError] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingInitial, setLoadingInitial] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("user-token");
    Cookies.remove("accessToken");
    setUserId();
    setIsLoggedIn(false);
    navigate("/");
  };

  useEffect(() => {
    if (error) setError(null);
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    usersApi
      .getCurrentUser()
      .then(({ isValid, userId }) => {
        if (isValid) {
          setIsLoggedIn(true);
          setUserId(userId);
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
      .then(({ id, token }) => {
        setUserId(id);
        setIsLoggedIn(true);
        localStorage.setItem("user-token", token);
        navigate("/");
      })
      .catch((error) => {
        // console.log({error})
        setError(error.response.data.data); /*where do I find this? in front end?*/      
      })
      .finally(() => setLoading(false));
  };

  const logIn = ({ username, password }) => {
    setLoading(true);

    usersApi
      .logIn({ username, password })
      .then(({ id, token }) => {
        setUserId(id);
        setIsLoggedIn(true);
        localStorage.setItem("user-token", token);
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
      userId,
      loading,
      error,
      isLoggedIn,
      logIn,
      signUp,
      logout,
    }),
    [userId, loading, error, isLoggedIn] // eslint-disable-line react-hooks/exhaustive-deps
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