import React from 'react';
import {Link} from 'react-router-dom';
import {Btn} from './styled';

const PatientListBtn = () => {
    return(
        <Link to='/lista-de-pacientes'>
            <Btn>Lista de pacientes</Btn>
        </Link>
    );
};

export default PatientListBtn;