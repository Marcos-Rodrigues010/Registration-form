import React, {useEffect, useState, useContext} from 'react';
import {Form} from './styled';
import useApi from '../../Api';
import {PatientListContext} from '../../contexts/PatientsListContext';
import PatientListBtn from '../PatientListBtn';

const App = () => {

    type StateListType = {
        sigla: string
    }


    const api = useApi();
    const {patientList, setPatientList} = useContext(PatientListContext);
    const [patientName, setPatientName] = useState('');
    const [cpfPatient, setCpfPatient] = useState('');
    const [birthDatePatient, setBirthDatePatient] = useState('');
    const [weightPatient, setWeightPatient] = useState('');
    const [heightPatient, setHeightPatient] = useState('');
    const [statesList, setStatesList] = useState<Array<StateListType>>([]);
    const [selectedState, setSelectedState] = useState('');

    useEffect(() => {
        const getStates = async () => {
            let json = await api.getStates();
            setStatesList(json);
        }
        getStates();
    }, [statesList]);

    const checkFields = (e: React.FormEvent) => {
        e.preventDefault();

        if(patientName === ''){
            document.getElementById('patientName')?.classList.add('requiredField');
        };
        if(cpfPatient.length < 10){
            document.getElementById('patientCPF')?.classList.add('requiredField');
        };
        if(selectedState === ''){
            document.getElementById('UFPatient')?.classList.add('requiredField');
        };
        checkCPF();
    }

    const checkCPF = () => {
        if(cpfPatient.length === 11 ){
            const index = patientList.findIndex((patient) => {
                return patient.cpfPatient === cpfPatient;
            })
            if(index === -1){
                registration();
            }else{
                alert('CPF Inválido!')
            }
        }
    };

    const registration = () => {
        if(patientName !== '' && cpfPatient.length === 11 && selectedState !== ''){
            let newPatient = [...patientList];
            newPatient.push({
                patientName,
                cpfPatient,
                birthDatePatient, 
                weightPatient,
                heightPatient,
                statePatient: selectedState
            });
            setPatientList(newPatient);
            setPatientName('');
            setCpfPatient('');
            setBirthDatePatient('');
            setWeightPatient('');
            setHeightPatient('');
            setSelectedState('');
            alert('Usuário cadastrado com sucesso');
        }
    }
    
    return(
        <Form>
            <label htmlFor="patientName" >Nome do Paciente *</label>
            <input 
                className='form--input' 
                type='text' 
                id='patientName'
                value={patientName}
                onChange={(e)=>setPatientName(e.target.value)}
            />

            <label htmlFor="patientCPF" >CPF do Paciente *</label>
            <input 
                className='form--input' 
                placeholder='xxxxxxxxxxx' 
                type='text' 
                id='patientCPF' 
                value={cpfPatient}
                onChange={(e)=>setCpfPatient(e.target.value)}
            />

            <label htmlFor="birthDatePatient" >Data de aniversário do Paciente</label>
            <input 
                className='form--input' 
                type='date' 
                id='birthDatePatient' 
                value={birthDatePatient}
                onChange={(e)=>setBirthDatePatient(e.target.value)}
            />

            <label htmlFor="weightPatient" >Peso do Paciente (em kg)</label>
            <input 
                className='form--input' 
                type='number' 
                step='0.1' 
                id='weightPatient' 
                value={weightPatient}
                onChange={(e)=>setWeightPatient(e.target.value)}
            />

            <label htmlFor="heightPatient" >Altura do Paciente (em metros)</label>
            <input 
                className='form--input' 
                type='number' 
                step='0.1' 
                id='heightPatient' 
                value={heightPatient}
                onChange={(e)=>setHeightPatient(e.target.value)}
            />

            <label htmlFor="UFPatient" >UF do Paciente *</label>
            <select id='UFPatient'  value={selectedState} onChange={(e)=>setSelectedState(e.target.value)}>
                <option></option>
                {statesList !== [] &&
                        statesList.map((state) => (
                        <option>{state.sigla}</option>
                    ))
                }
            </select>
                <div className="BtnsArea">
                    <button className='form--btnSubmit' onClick={checkFields}>Cadastrar</button>
                    <PatientListBtn />
                </div>
        </Form>
    ); 
};

export default App;