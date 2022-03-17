import React, {useContext} from 'react';
import {RegistrationBtn} from './styled';
import {UserLoggedContext} from '../../contexts/userLoggedContext';
import { visibilityLoginScreenContext } from '../../contexts/visibilyLoginScreenContext';
import {useNavigate} from 'react-router-dom';

type Props = {
    width: string
    height: string
}
const App = (props: Props) => {

    const {userLogged} = useContext(UserLoggedContext);
    const {setVisibleLoginScreen} = useContext(visibilityLoginScreenContext)
    const navigate = useNavigate();

    const GoRegistration = () => {
        if(userLogged.userName !== ''){
            navigate('/cadastro')
        }else{
            setVisibleLoginScreen(true);
        }
    };

    return(
        <RegistrationBtn onClick={GoRegistration} style={{width: props.width, height: props.height}}>
            Cadastrar Paciente
        </RegistrationBtn>
    );
};

export default App;