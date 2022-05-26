import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Autorization from '../../Autorization/Autorization';

const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        alert(searchParams.get('code'));
    }, []);

    return (
        <div>
            <Autorization/>
        </div>
    );
};

export default Home;