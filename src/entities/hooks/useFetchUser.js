import UserService from "../services/userService";
import { userState } from '../../app/atoms/userAtom';
import { authState } from '../../app/atoms/authAtom';
import { useSetRecoilState } from 'recoil';

export const useFetchUser = () => {
    const setUser = useSetRecoilState(userState);
    const setAuth = useSetRecoilState(authState);

    return async () => {
        try {
            const userData = await UserService.fetchUserBySid();
            setUser(userData);
            setAuth(true);
            return userData;
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    };
};
