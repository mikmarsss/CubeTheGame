import { atom } from 'recoil';

export const diceResultState = atom({
    key: 'diceResultState',
    default: {
        result: 1
    }
});