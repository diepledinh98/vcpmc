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
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/Store';
// import { saveUser } from './redux/Auth/AuthSlice';
import { useAppDispatch } from './shared/hook/reduxhook';
import { saveUser } from './redux/Auth/AuthSlice';
function App() {
  const dispatch = useAppDispatch()
  const [IsUser, setIsUser] = useState(false)
  const userCurrent = useSelector((state: RootState) => state.auth);


  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsUser(true)
      dispatch(saveUser(user))
    } else {
      setIsUser(false)
    }
  });
  return (
    <div className='App'>

      <Routes>
        {userCurrent.isLogin ? privateRoutes.map((route, index) => {
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
