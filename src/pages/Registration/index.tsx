import React from 'react';
import {RegistrationArea} from './styled';
import Form from '../../components/RegistrationForm';

const Page = () => {
    return(
        <RegistrationArea>
            <div className='top'>
                <h1>Cadastrar Paciente</h1>
            </div>
            <div className='down'>
                <Form />
            </div>
        </RegistrationArea>
    );
};

export default Page;