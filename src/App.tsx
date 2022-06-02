import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AppContextProvider, initialState } from './state/AppContext';
import Header from './components/header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import LogIn from './components/identity/logIn';
import Register from './components/identity/register';
import Footer from './components/footer';
import Page404 from './components/page404';

function App() {

  function setValues(firstName : string, lastName: string, token: string, refreshToken: string) {
    let newState = {...appState}
    newState.lastName = lastName
    newState.firstName = firstName
    newState.token = token
    newState.refreshToken = refreshToken
    setAppState({ ...appState, firstName, lastName, token, refreshToken });
  }
  const [appState, setAppState] = useState({...initialState, setValues})

  return (
    <div className="App">
      <AppContextProvider value={appState}>
      <Header></Header>
      <hr/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/identity/LogIn" element={<LogIn />} />
          <Route path="/identity/Register" element={<Register />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      <Footer></Footer>
      </AppContextProvider>
    </div>
  );
}

export default App;
