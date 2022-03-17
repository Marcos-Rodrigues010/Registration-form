import React, {useState, createContext, SetStateAction} from 'react';
import {UsersType} from '../users';

export const initialState: UserLoggedType = {
    userLogged: {
        userName: '',
        userPassword: '',
        ocupation: ''
    },
    setUserLogged: () => null
}


type UserLoggedType = {
    userLogged: UsersType,
    setUserLogged: React.Dispatch<SetStateAction<UsersType>>
};


type Props = {
    children: React.ReactNode
  }

export const UserLoggedContext = createContext(initialState);

export const UserLoggedContextProvider = ({children}: Props) => {

    const [userLogged, setUserLogged] = useState(initialState.userLogged);

    return(
        <UserLoggedContext.Provider value={{userLogged, setUserLogged}}>
            {children}
        </UserLoggedContext.Provider>
    );
};