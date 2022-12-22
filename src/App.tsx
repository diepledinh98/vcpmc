import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Login from './view/Auth/Login/Login';
import './reset.scss'
import './_variable.scss'
import { initializeApp } from "firebase/app";
import { auth } from './configs';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './router/router';
import DefaultLayout from './layout/layout';
import { useSelector } from 'react-redux';
import { RootState } from './redux/Store';
function App() {
  const [IsUser, setIsUser] = useState(false)
  const user = useSelector((state: RootState) => state.auth.user);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsUser(true)
    } else {
      setIsUser(false)
    }
  });
  return (
    <div className='App'>

      <Routes>
        {IsUser ? privateRoutes.map((route, index) => {
          const Page = route.component;
          let Layout = DefaultLayout;
          return (
            <Route key={index} path={route?.path} element={
              <Layout>
                {Page}
              </Layout>
            } />
          )
        })
          :
          publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;

            if (route?.path === '/profile') {
              return (<Route key={index} path={route?.path} element={
                <Layout>
                  {Page}
                </Layout>
              } />)
            }
            return (
              <Route key={index} path={route?.path} element={route?.component} />
            )
          })
        }
      </Routes>

    </div>
  );
}

export default App;
