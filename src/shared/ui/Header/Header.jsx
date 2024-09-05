import React from "react";
import styled from 'styled-components';
import Button from "../Button";
import Text from "../Text/Text";

const StyledHeader = styled.div`
   width: 100%;
   height: 64px;
    display:flex;
    align-items: center;
    background-color: inherit;
    border:none;
`;

const Header = () => {
    return (
        <>
            <StyledHeader>
                <Text width={'84px'} font={'Inter-Bold'} ml={'1.25%'} cursor={'pointer'}>
                    Test Game
                </Text>
                <Button width={'71px'} ml={'auto'} backColor={'#643F82'}>
                    Вход
                </Button>
                <Button width={'134px'} ml={'0.42%'} mr={'1.88%'} backColor={'#643F82'}>
                    Регистрация
                </Button>
            </StyledHeader>
        </>
    )
}

export default Header