import Cookies from 'js-cookie';

export default class UserService {
    static async login(login, password) {
        try {
            const response = await fetch('https://api.lettobet.dev.bet4skill.com/api/client-login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({ login, password })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const userData = await response.json();
            return userData;
        } catch (e) {
            console.log(e);
            throw e; // Бросаем оригинальную ошибку
        }

    }

    static async refreshUser(login, password) {
        try {
            const response = await fetch('https://api.lettobet.dev.bet4skill.com/api/client-login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({ login, password })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const userData = await response.json();
            return userData;
        } catch (e) {
            console.log(e);
            throw e;
        }

    }
}   