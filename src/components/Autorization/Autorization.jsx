import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { client_id, redirect_uri, permissions, display } from '../../API/Service';

const Autorization = () => {
    const params = useSearchParams();
    console.log(params.get('code'));

    return (
        <>
            <a
                href={`https://oauth.vk.com/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${permissions}&display=${display}&revoke=1`}
            >
                Авторизоваться
            </a>
        </>
    );
};

export default Autorization;