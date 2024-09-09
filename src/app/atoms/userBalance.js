import { atom } from 'recoil';

export const userBalanceState = atom({
    key: 'userBalanceState',
    default: {
        balance: 100
    },
});
