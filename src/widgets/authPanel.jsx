import React, { useState } from "react";
import Button from "../shared/ui/Button";
import Container from "../shared/ui/Container";
import Text from "../shared/ui/Text/Text";
import Input from "../shared/ui/Input";
import { authPanelState } from "../app/atoms/authPanelAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import ExitButton from "../shared/ui/ExitButton/ExitButton";
import { useLogin } from "../entities/hooks/useLogin";

const AuthPanel = () => {

    const login = useLogin()


    const [passwordError, setPasswordError] = useState('Поле не может быть пустым')
    const [emailError, setEmailError] = useState('Поле не может быть пустым')
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

    const validatePasswordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 6) {
            setPasswordError('Пароль должен быть больше 6 символов')
        } else {
            setPasswordError('')
        }
    }

    const validateLoginHandler = (e) => {
        setEmail(e.target.value)
        if (e.target.value === '') {
            setEmailError('Логин не может быть пустым')
        } else {
            setEmailError('')
        }
    }



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
                <Container
                    display={'flex'}
                    fd={'column'}
                    backColor={'inherit'}
                >
                    <Input
                        type={'text'}
                        placeholder={'Login'}
                        value={email}
                        onChange={(e) => validateLoginHandler(e)}
                        errorr={emailError === '' ? false : true}
                    />
                    {
                        emailError !== '' &&
                        <Text fontSize={'14px'} color={'#FF0000'}>
                            {emailError}
                        </Text>
                    }
                </Container>
                <Container
                    display={'flex'}
                    fd={'column'}
                    backColor={'inherit'}
                >
                    <Input
                        type={'password'}
                        placeholder={'Password'}
                        color={'black'}
                        value={password}
                        onChange={(e) => validatePasswordHandler(e)}
                        errorr={passwordError === '' ? false : true}
                    />
                    {
                        passwordError !== '' &&
                        <Text fontSize={'14px'} color={'#FF0000'}>
                            {passwordError}
                        </Text>
                    }

                </Container>


                {
                    state.type === 'vhod' &&
                    <Container display={'flex'} fd={'column'} >
                        <Button
                            backColor={'#643F82'}
                            bb={'1px solid #9159BE'}
                            width={'338px'}
                            onClick={loginHandler}
                            bgHover={'#8151A8'}
                            bbHover={'1px solid #AB69E2'}
                            disabled={(emailError === '' && passwordError === '') ? false : true}
                        >
                            Войти
                        </Button>
                    </Container>
                }
                {
                    state.type === 'reg' &&
                    <Button
                        backColor={'#643F82'}
                        bb={'1px solid #9159BE'}
                        width={'338px'}
                        bgHover={'#8151A8'}
                        bbHover={'1px solid #AB69E2'}
                        disabled={(emailError === '' && passwordError === '') ? false : true}
                    >
                        Зарегистрироваться
                    </Button>
                }



            </Container >
        </>
    )
}

export default AuthPanel