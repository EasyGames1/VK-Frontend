import axios from "axios";
import jsonpAdapter from 'axios-jsonp';
import { version } from "../constants/getData";

export default class Service {
    static async getFriends(access_token) {
        return await axios.get('https://api.vk.com/method/friends.search', {
            adapter: jsonpAdapter,
            params: {
                access_token: access_token,
                count: 50,
                fields: 'photo_50',
                v: version
            }
        });
    };
};