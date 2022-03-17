import React, {useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {UserLoggedContext} from '../../contexts/userLoggedContext';
import {visibilityLoginScreenContext} from '../../contexts/visibilyLoginScreenContext';

type Props ={
   children: JSX.Element
}

const RequireAuth = ({children}: Props) => {

    const {userLogged} = useContext(UserLoggedContext);
    const {setVisibleLoginScreen} = useContext(visibilityLoginScreenContext);


   if(userLogged.userName === ''){
        setVisibleLoginScreen(true);
      return <Navigate to='/' /> 
   };

   return children;
};

export default RequireAuth;
