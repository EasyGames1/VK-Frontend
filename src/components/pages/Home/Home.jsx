import React, { useContext, useEffect, useState } from 'react';
import useFetching from '../../../hooks/useFetching';
import Service from '../../../API/Service';
import Autorization from '../../Authorization/Authorization';
import Loader from '../../Loader';
import Url from '../../../API/Url';
import { Token } from '../../../context';

const Home = () => {
    const token = useContext(Token);
    const [searchedFriends, setSearchedFriends] = useState({});
    const [searchFriends, searchFriendsLoading, searchFriendsError] = useFetching(async () => {
        const response = await Service.getFriends();
        setSearchedFriends(response);
    });
    useEffect(() => {

        searchFriends();
    }, []);
    
    return (
        <div>
            <Autorization />
            {
                searchFriendsLoading ?
                    <Loader /> :
                    <ul className='mw500'>
                        {
                            searchedFriends.data.response.items.map((friend) =>
                                <li key={friend.id} className='jcs im10'>
                                    <img src={friend.photo_50} />
                                    <div>
                                        {
                                            friend.first_name
                                        }&nbsp;
                                        {
                                            friend.last_name
                                        }
                                    </div>
                                </li>
                            )
                        }
                    </ul>
            }
        </div>
    );
};

export default Home;