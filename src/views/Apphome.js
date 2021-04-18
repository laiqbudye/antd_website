import React from 'react';
import Apphero from '../components/home/Apphero';
import Appabout from '../components/home/Appabout';
import Appfeature from '../components/home/Appfeature';
import Appworks from '../components/home/Appworks';

const Apphome = () => {
    return (
        <div className='main'>
            <Apphero />
            <Appabout />
            <Appfeature />
            <Appworks />
        </div>
    )
}

export default Apphome
