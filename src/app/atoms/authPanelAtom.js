import { atom } from 'recoil';

export const authPanelState = atom({
    key: 'authPanelState',
    default: {
        type: 'none',
        isVisible: false,
    }
});