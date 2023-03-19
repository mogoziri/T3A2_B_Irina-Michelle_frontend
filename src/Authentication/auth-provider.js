import React, { useState, useMemo, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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

  //call to server to logout. Display home page when logged out.
  const logout = () => {
    localStorage.removeItem("user-token");
    setUserId();
    setIsLoggedIn(false);
    navigate("/");
  };

  //set error
  useEffect(() => {
    if (error) setError(null);
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  //If user is in DB retrieve/get user info is successful, if they are not in DB send error message
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

  //User signs up successfully, id and token are generated, if successful direct them to home page, otherwise Error message displayed
  const signUp = ({ username, password }) => {
    setLoading(true);

    usersApi
      .signUp({ username, password })
      .then(({ id, token }) => {
        setUserId(id);
        setIsLoggedIn(true);
        localStorage.setItem("user-token", token);
        navigate("/");
      })
      .catch((error) => {
        setError(
          error.response.data.data
        ); /*where do I find this? in front end?*/
      })
      .finally(() => setLoading(false));
  };

   //User logs in successfully, id and token are generated, if successful direct them to home page, otherwise Error message displayed
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
