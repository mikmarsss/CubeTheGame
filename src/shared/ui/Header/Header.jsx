import React, { useState } from "react";
import styled from 'styled-components';
import Button from "../Button";
import Text from "../Text/Text";
import { useRecoilValue, useRecoilState } from "recoil";
import { authState } from "../../../app/atoms/authAtom";
import { userState } from "../../../app/atoms/userAtom";
import AuthPanel from "../../../widgets/authPanel";
import Container from "../Container";
import { authPanelState } from "../../../app/atoms/authPanelAtom";

const StyledHeader = styled.div`
   width: 100%;
   height: 64px;
    display:flex;
    align-items: center;
    background-color: inherit;
    border:none;
`;

const Header = () => {
    const [state, setState] = useRecoilState(authPanelState);


    const isAuth = useRecoilValue(authState)
    const user = useRecoilValue(userState)

    const showAuthPanelHandler = (show) => {
        setState((prevState) => ({
            ...prevState,
            type: show,
            isVisible: !prevState.isVisible
        }));
    };

    return (
        <>
            <StyledHeader>
                <Text width={'84px'} font={'Inter-Bold'} ml={'1.25%'} cursor={'pointer'}>
                    Test Game
                </Text>

                {
                    state.isVisible &&
                    <AuthPanel type={state.type} />
                }
                {
                    !isAuth &&
                    <>
                        <Button
                            width={'71px'}
                            ml={'auto'}
                            backColor={'#643F82'}
                            bb={'1px solid #9159BE'}
                            bgHover={'#8151A8'}
                            bbHover={'1px solid #AB69E2'}
                            onClick={() => showAuthPanelHandler('vhod')}
                        >
                            Вход
                        </Button>
                        <Button
                            width={'134px'}
                            ml={'0.42%'}
                            mr={'1.88%'}
                            backColor={'#643F82'}
                            bb={'1px solid #9159BE'}
                            bgHover={'#8151A8'}
                            bbHover={'1px solid #AB69E2'}
                            onClick={() => showAuthPanelHandler('reg')}
                        >
                            Регистрация
                        </Button>

                    </>
                }
                {
                    isAuth &&
                    <Text width={'auto'} font={'Inter-Bold'} ml={'auto'} mr={'1.88%'} cursor={'pointer'}>
                        {
                            user.balance
                        }
                    </Text>

                }
                {
                    state.isVisible &&
                    <Container position={'absolute'} width={'100%'} height={'100%'} zIndex={'5'} top={'0'} backColor={'black'} opacity={'0.5'}>

                    </Container>
                }
            </StyledHeader>
        </>
    )
}

export default Header