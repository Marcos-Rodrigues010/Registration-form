import React, {useState, createContext, SetStateAction} from 'react';

const initialState: LoginScreenInitialState = {
    visibleLoginScreen: false,
    setVisibleLoginScreen: () => null
}


type LoginScreenInitialState = {
    visibleLoginScreen: boolean,
    setVisibleLoginScreen: React.Dispatch<SetStateAction<boolean>>
};


type Props = {
    children: React.ReactNode
  }

export const visibilityLoginScreenContext = createContext(initialState);

export const LoginScreenContextProvider = ({children}: Props) => {

    const [visibleLoginScreen, setVisibleLoginScreen] = useState(initialState.visibleLoginScreen);

    return(
        <visibilityLoginScreenContext.Provider value={{visibleLoginScreen, setVisibleLoginScreen}}>
            {children}
        </visibilityLoginScreenContext.Provider>
    );
};