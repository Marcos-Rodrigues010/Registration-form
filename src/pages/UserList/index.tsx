import React, {useContext} from 'react';
import {UserList} from './styled';
import {PatientListContext} from '../../contexts/PatientsListContext';

const Page = () => {
    const {patientList} = useContext(PatientListContext);
    return(
        <UserList>
            <div className='top'>
                <h1>Lista de Paciente</h1>
            </div>
            <div className='down'>
                <div className="userList--Area">
                    {patientList !== [] &&
                        patientList.map((patient) => (
                        <div className='userList--item'>
                            <div className='userList--info'>Nome: {patient.patientName}</div>
                            <div className='userList--info'>CPF: {patient.cpfPatient}</div>
                            <div className='userList--info'>Data de nascimento: {patient.birthDatePatient}</div>
                            <div className='userList--info'>Peso: {patient.weightPatient}</div>
                            <div className='userList--info'>Altura: {patient.heightPatient}</div>
                            <div className='userList--info'>UF: {patient.statePatient}</div>
                        </div>
                    ))}
                </div>
            </div>
        </UserList>
    );
};

export default Page;