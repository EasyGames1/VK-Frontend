import React, { useContext } from "react";
import Authorization from '../../Authorization/Authorization';
import { Token } from "../../../context";

const Home = () => {
    const token = useContext(Token);

    return (
        <div>
            {
                token
            }
            <Authorization/>
        </div>
    );
};

export default Home;