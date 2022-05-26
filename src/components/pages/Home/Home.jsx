import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {useFetching} from '../../../hooks/useFetching';
import Service from '../../../API/Service';
import Autorization from '../../Authorization/Authorization';

const Home = () => {
    // const [searchParams, setSearchParams] = useSearchParams();
    const [searchedFriends, setSearchedFriends] = useState([]);
    const [searchFriends, searchFriendsLoading, searchFriendsError] = useFetching(async () => {
        const response = await Service.getFriends();
    });
    useEffect(() => {
        // alert(searchParams.get('#access_token'));
        searchFriends();
    }, []);

    return (
        <div>
            <Autorization/>
        </div>
    );
};

export default Home;