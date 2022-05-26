import axios from "axios";

export const redirect_uri = 'https://vk-frontend-ten.vercel.app';
export const version = '5.52';
export const client_id = '8176974';
export const permissions = 'friends';
export const display = 'popup';

export class Methods {
    static async getFriends() {
        return await axios.get('https://oauth.vk.com/authorize?client_id=8176974&display=page&scope=friends,messages&response_type=token&v=5.52', {
            params: {
                client_id: client_id,
                scope: permissions,
                display: display,
                response_type: 'token',
                v: version
            }
        });
    };
};