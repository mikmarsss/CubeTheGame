import { atom } from 'recoil';

export const betResultState = atom({
    key: 'betResultState',
    default: {
        status: 'none',
        winSize: 0,
    }
});