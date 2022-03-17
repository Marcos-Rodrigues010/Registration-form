import React from 'react';
import {Banner} from './styled';

import {GiHealthNormal} from 'react-icons/gi';

const App = () => {
    return(
        <Banner>
            <div className='banner--container'>
                <div className='banner--text'>
                    <span className='banner--logo'><GiHealthNormal />SAÚDE:</span><br/>
                    Cuidando melhor de você!
                </div>
            </div>
        </Banner>
    );
};

export default App;