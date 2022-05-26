import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useFetching from '../../../hooks/useFetching';
import Service from '../../../API/Service';
import Autorization from '../../Authorization/Authorization';

const Home = () => {
    // const [searchParams, setSearchParams] = useSearchParams();
    const [searchedFriends, setSearchedFriends] = useState({});
    const [searchFriends, searchFriendsLoading, searchFriendsError] = useFetching(async () => {
        const response = await Service.getFriends();
        setSearchedFriends(response);
    });
    useEffect(() => {
        // alert(searchParams.get('#access_token'));
        searchFriends();
    }, []);
    console.log(searchedFriends?.response?.items);
    return (
        <div>
            <Autorization />
            <ul>
                {
                    searchedFriends?.response?.items?.map((friend, i) =>
                        <li>
                            {
                                friend.first_name
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default Home;