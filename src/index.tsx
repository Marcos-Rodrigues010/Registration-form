import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {LoginScreenContextProvider} from './contexts/visibilyLoginScreenContext';
import {UserLoggedContextProvider} from './contexts/userLoggedContext';
import {PatientListProvider} from './contexts/PatientsListContext';

ReactDOM.render(
  <BrowserRouter>
    <LoginScreenContextProvider>
      <UserLoggedContextProvider>
        <PatientListProvider>
          <App />
        </PatientListProvider>
      </UserLoggedContextProvider>
    </LoginScreenContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
