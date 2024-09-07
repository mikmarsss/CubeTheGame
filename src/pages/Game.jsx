import React from "react";
import Button from "../shared/ui/Button";
import Container from "../shared/ui/Container";
import Header from "../shared/ui/Header";
import Text from "../shared/ui/Text/Text";
import { useRecoilValue } from "recoil";
import { authState } from "../app/atoms/authAtom";
import BetsPanel from "../widgets/betsPanel";
import Dice from "../shared/ui/Dice/Dice";

const Game = () => {
    const isAusth = useRecoilValue(authState)
    return (
        <>
            <Container width={'100%'} minHeight={'100vh'} display={'flex'} fd={'column'} ai={'center'} jc={'center'}>
                <Container width={'100%'}>
                    <Header />
                </Container>
                <Container
                    width={'100%'}
                    height={'100%'}
                    display={'flex'}
                    fd={'column'}
                    fg={'1'}
                    ai={'center'}
                    mt={'118px'}
                >
                    {
                        !isAusth &&
                        <Text fontSize={'20px'} font={'Inter-Bold'}>
                            Войдите, чтобы продолжить
                        </Text>
                    }
                    {
                        isAusth &&
                        <Text fontSize={'20px'} font={'Inter-Bold'}>
                            Сделайте ставку
                        </Text>
                    }
                    <Container
                        border={'solid red 1px'}
                        width={'338px'}
                        height={'auto'}
                        backColor={'transparent'}
                        display={'flex'}
                        fd={'column'}
                        ai={'center'}
                        mt={'59px'}
                    >
                        <Container
                            border={'solid #42165D 2px'}
                            backColor={'transparent'}
                            br={'4.67px'}
                            width={'130px'}
                            height={'130px'}
                            display={'flex'}
                            fd={'column'}
                            ai={'center'}
                            jc={'center'}
                        >
                            <Dice size={'92.26px'} dotSize={'14.68px'} value={2} />
                        </Container>
                        <BetsPanel />
                    </Container>
                </Container>
            </Container>
        </>
    )
}

export default Game