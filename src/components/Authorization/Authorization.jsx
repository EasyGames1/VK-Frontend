import React from 'react';
import { client_id, redirect_uri, permissions, display } from '../../constants/getData';

const Autorization = () => {
    return (
        <>
            <a
                href={`https://oauth.vk.com/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${permissions}&display=${display}&response_type=token&revoke=1`}
            >
                Авторизоваться
            </a>
        </>
    );
};

export default Autorization;