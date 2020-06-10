import React, { useState, useEffect } from "react";
import "./default.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth, handleUserProfile } from "./firebase/utils";

// Layout

import MainLayout from "./layouts/MainLayout";
import HomepageLayout from "./layouts/HomepageLayout";

// Pages

import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

function App() {
  const [state, setstate] = useState({ currentUser: null });

  let authListener = null;

  useEffect(() => {
    authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          setstate((prevState) => ({
            ...prevState,
            id: snapshot.id,
            ...snapshot.data,
          }));
        });
      }

      setstate((prevState) => ({
        ...prevState,
        currentUser: userAuth,
      }));
    });
  }, []);

  useEffect(() => {
    return () => {
      authListener();
    };
  }, []);

  const { currentUser } = state;

  return (
    <div className="App">
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <HomepageLayout currentUser={currentUser}>
              <Homepage />
            </HomepageLayout>
          )}
        />
        <Route
          path="/registration"
          render={() => (
            <MainLayout currentUser={currentUser}>
              <Registration />
            </MainLayout>
          )}
        />
        <Route
          path="/login"
          render={() =>
            currentUser ? (
              <Redirect to="/" />
            ) : (
              <MainLayout currentUser={currentUser}>
                <Login />
              </MainLayout>
            )
          }
        />
      </Switch>
    </div>
  );
}

export default App;
