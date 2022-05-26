export default class Url {
    static hashValue(hashName) {
        return window.location.hash.substring(1).split('&').filter((value) => value.includes(hashName)).toString().split('=')[1];
    };
};