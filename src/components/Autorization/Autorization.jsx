import React from 'react';
import { useNavigate } from 'react-router-dom';
import { client_id, redirect_uri, permissions, display } from '../../API/Service';

const Autorization = () => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => window.location.href = `https://oauth.vk.com/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${permissions}&display=${display}&revoke=1`}
        >
            Авторизоваться
        </button>
    );
};

export default Autorization;