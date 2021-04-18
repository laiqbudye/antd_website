import React from 'react';
import Apphero from '../components/home/Apphero';
import Appabout from '../components/home/Appabout';
import Appfeature from '../components/home/Appfeature';

const Apphome = () => {
    return (
        <div className='main'>
            <Apphero />
            <Appabout />
            <Appfeature />
        </div>
    )
}

export default Apphome
