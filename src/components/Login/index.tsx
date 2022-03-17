import React, {useContext, useEffect, useState} from 'react';
import {LoginArea} from './styled';

import {FaUserCircle} from 'react-icons/fa';
import {visibilityLoginScreenContext} from '../../contexts/visibilyLoginScreenContext';
import {UserLoggedContext} from '../../contexts/userLoggedContext';
import {users} from '../../users';

const Page = () => {


    const {visibleLoginScreen, setVisibleLoginScreen} = useContext(visibilityLoginScreenContext);
    const {setUserLogged} = useContext(UserLoggedContext);
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    useEffect(() => {
        let inputName = document.getElementById('userNameInput') as HTMLInputElement;
        inputName.focus();
    }, [])

    const signIn = () => {
        if(userName === '' || userPassword === ''){
            alert('Preencha todos os campos')
        }else{
            checkUsers();
        }
    };

    const checkUsers = () => {
        let user = users.findIndex(function(item){
            return item.userName === userName && item.userPassword === userPassword;
                
        });
        if(user === -1){
            alert('usuário inválido!');
        }else{
            setUserLogged(users[user]);
            setVisibleLoginScreen(false);
            setUserName('');
            setUserPassword('');
        }

    };

    return(
        <LoginArea style={{display: visibleLoginScreen ? 'flex' : 'none'}}>
            <div className='loginArea--blur'></div>
            <div className='loginArea--content'>
                <h1>Faça Login</h1>
                <div className='loginArea--avatar'> <FaUserCircle /> </div>
                <div className='loginArea--inputs'>
                    <input 
                        className='loginArea--input' 
                        type='text' 
                        id='userNameInput'
                        placeholder='Digite seu nome de usuário' 
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <input 
                        className='loginArea--input' 
                        type='password' 
                        placeholder='Digite sua senha'
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                    />
                    <button className='loginArea--btn' id='sigIn-btn' onClick={signIn}>Entrar</button>
                    <button className='loginArea--btn' id='cancel-btn' onClick={()=>setVisibleLoginScreen(false)}>Cancelar</button>
                </div>
            </div>
        </LoginArea>
    );
}

export default Page;