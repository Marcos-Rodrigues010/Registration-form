import React, {useState, createContext, SetStateAction} from 'react';
import {UsersType} from '../users';

export const initialState: PatientsListContext = {
    patientList: [],
    setPatientList: () => null
}


type PatientsListContext = {
    patientList: Array<Patient>,
    setPatientList: React.Dispatch<SetStateAction<Patient[]>>
};

type Patient = {
    patientName: string,
    cpfPatient: string,
    birthDatePatient?: string,
    weightPatient?: string,
    heightPatient?:string,
    statePatient:String
}


type Props = {
    children: React.ReactNode
  }

export const PatientListContext = createContext(initialState);

export const PatientListProvider = ({children}: Props) => {

    const [patientList, setPatientList] = useState(initialState.patientList);

    return(
        <PatientListContext.Provider value={{patientList, setPatientList}}>
            {children}
        </PatientListContext.Provider>
    );
};