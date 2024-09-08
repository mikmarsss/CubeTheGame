import React, { useState } from "react";
import Button from "../shared/ui/Button";
import Container from "../shared/ui/Container";
import Text from "../shared/ui/Text/Text";
import Input from "../shared/ui/Input";
import { authPanelState } from "../app/atoms/authPanelAtom";
import { useRecoilState } from "recoil";
import ExitButton from "../shared/ui/ExitButton/ExitButton";
import { useLogin } from "../entities/hooks/useLogin";

const AuthPanel = () => {

    const login = useLogin()

    const [state, setState] = useRecoilState(authPanelState);
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const loginHandler = async () => {
        await login(email, password)
        setState((prevState) => ({
            isVisible: !prevState.isVisible
        }));
    }

    const closeAuthPanelHandler = (show) => {
        setState((prevState) => ({
            ...prevState,
            type: show,
            isVisible: !prevState.isVisible
        }));
    };

    return (
        <>
            <Container
                zIndex={'10'}
                position={'absolute'}
                br={'4px'}
                width={'434px'}
                height={'256px'}
                top={'50%'}
                left={'50%'}
                transform={'translate(-50%, -50%)'}
                backColor={'#250E36'}
                border={'solid #4B2964 1px'}
                display={'flex'}
                fd={'column'}
                ai={'center'}
                jc={'center'}
                gap={'16px'}
            >
                <Button
                    onClick={() => closeAuthPanelHandler('none')}
                    position={'absolute'}
                    top={'0'}
                    left={'0'}
                    backColor={'transparent'}
                    width={'auto'}
                    height={'auto'}
                    color={'black'}
                    ml={'93.09%'}
                    mt={'15px'}
                >
                    <ExitButton />
                </Button>
                <Input
                    type={'text'}
                    placeholder={'Login'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type={'password'}
                    placeholder={'Password'}
                    color={'black'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {
                    state.type === 'vhod' &&
                    <Button
                        backColor={'#643F82'}
                        bb={'#9159BE'}
                        width={'338px'}
                        onClick={loginHandler}
                    >
                        Войти
                    </Button>
                }
                {
                    state.type === 'reg' &&
                    <Button
                        backColor={'#643F82'}
                        bb={'#9159BE'}
                        width={'338px'}
                    >
                        Зарегистрироваться
                    </Button>
                }



            </Container >
        </>
    )
}

export default AuthPanel