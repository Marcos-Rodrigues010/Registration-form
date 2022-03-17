import React, {useContext, useState} from 'react';
import {Header} from './styled';
import {GiHealthNormal} from 'react-icons/gi';
import {visibilityLoginScreenContext} from '../../contexts/visibilyLoginScreenContext';
import { UserLoggedContext } from '../../contexts/userLoggedContext';
import {IoIosArrowDown} from 'react-icons/io';
import { initialState } from '../../contexts/userLoggedContext';

const App = () => {

    const {setVisibleLoginScreen} = useContext(visibilityLoginScreenContext);
    const { userLogged, setUserLogged } = useContext(UserLoggedContext);
    const [showLogoutBtn, setShowLogoutBtn] = useState(false);

    const logOut = () => {
        setUserLogged(initialState.userLogged);
    };

    return(
        <Header>
            <div className='header--container'>
                <div className='header--logoArea'>
                    <div className='header--svg'><GiHealthNormal /></div>
                    SAÚDE
                </div>
                {
                userLogged.userName === '' ?
                    <div className='header--loginBtn'>
                        <div onClick={() => setVisibleLoginScreen(true)}>Login</div>
                    </div>
                    :
                    <div className='header--userLoggedInfo'>
                        <span>Bem vindo, {userLogged.userName}</span>
                        <span onClick={()=>setShowLogoutBtn(!showLogoutBtn)} style={{cursor:'pointer'}}><IoIosArrowDown /></span>
                        <div 
                            className='header--logoutBtn' 
                            style={{height: showLogoutBtn ? '40px' : '0', 
                            padding: showLogoutBtn ? '8px' : '0'}}
                        >
                            <div className='logoutBtn' onClick={logOut}>Sair</div>
                        </div>
                    </div>
                }
            </div>
        </Header>
    );
};

export default App;