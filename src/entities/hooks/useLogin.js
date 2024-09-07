import UserService from "../services/userService";
import { userState } from '../../app/atoms/userAtom';
import { authState } from '../../app/atoms/authAtom';
import { useSetRecoilState } from 'recoil';
import { sidState } from "../../app/atoms/sidAtom";
import Cookies from 'js-cookie';

export const useLogin = () => {
    const setUser = useSetRecoilState(userState);
    const setAuth = useSetRecoilState(authState);
    const setSid = useSetRecoilState(sidState);

    return async (login, password) => {
        try {
            const userData = await UserService.login(login, password);
            setUser(userData);
            setAuth(true);
            return userData;
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    };

};
