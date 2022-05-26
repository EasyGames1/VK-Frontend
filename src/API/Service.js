import axios from "axios";
import { access_token, version } from "../constants/getData";

export default class Service {
    static async getFriends() {
        return await axios.get('https://api.vk.com/method/friends.search', {
            params: {
                access_token: access_token,
                count: 50,
                v: version
            }
        });
    };
};