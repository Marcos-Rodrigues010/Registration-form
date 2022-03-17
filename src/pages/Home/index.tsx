import React from 'react';
import {Home} from './styled';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import RegistrationBtn from '../../components/RegistrationBtn';
import PatientListBtn from '../../components/PatientListBtn';

const Page = () => {
    return(
        <Home>
            <Header />
            <Banner />
            <div className='RegistrationBtnArea'>
                <RegistrationBtn width='300px' height='40px'/>
            </div>
            <div className='PatientListBtnArea'>
                <PatientListBtn />
            </div>
        </Home>
    );
}

export default Page;