import { atom } from 'recoil';

export const betState = atom({
    key: 'betState',
    default: {
        type: 'none',
        number: 0,
        size: '1.00',
        isRolling: false,
    }
});