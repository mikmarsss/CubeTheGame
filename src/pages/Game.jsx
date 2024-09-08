import React, { useState } from "react";
import Button from "../shared/ui/Button";
import Container from "../shared/ui/Container";
import Header from "../shared/ui/Header";
import Text from "../shared/ui/Text/Text";
import { useRecoilValue } from "recoil";
import { authState } from "../app/atoms/authAtom";
import BetsPanel from "../widgets/betsPanel";
import Dice from "../shared/ui/Dice/Dice";
import { betResultState } from "../app/atoms/betResultAtom";
import { diceResultState } from "../app/atoms/diceResultAtom";

const Game = () => {
    const isAusth = useRecoilValue(authState)

    const bet = useRecoilValue(betResultState)
    const dice = useRecoilValue(diceResultState)

    const [isRolling, setIsRolling] = useState(false);


    const rollDice = () => {
        setIsRolling(true);
        setTimeout(() => {
            setIsRolling(false);
        }, 2000);
    };
    return (
        <>
            <Container width={'100%'} minHeight={'100vh'} display={'flex'} fd={'column'} ai={'center'} jc={'center'}>
                <Container width={'100%'} zIndex={'10'}>
                    <Header />
                </Container>
                {
                    !isAusth &&
                    <Container position={'absolute'} width={'100%'} height={'100%'} zIndex={'5'} backColor={'inherit'} opacity={'0.5'}>

                    </Container>
                }

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
                        <Text fontSize={'20px'} font={'Inter-Bold'} zIndex={'10'} cursor={'pointer'}>
                            Войдите, чтобы продолжить
                        </Text>
                    }
                    {
                        (isAusth && bet.status === 'none') &&
                        <Text fontSize={'20px'} font={'Inter-Bold'}>
                            Сделайте ставку
                        </Text>
                    }
                    {
                        (isAusth && bet.status !== 'none') &&
                        <>
                            <Text fontSize={'20px'} font={'Inter-Bold'}>
                                Результат броска кубка: {dice.result}
                            </Text>
                            <Text fontSize={'16px'} font={'Inter-Regular'}>
                                {
                                    bet.status ? `Вы выиграли ${bet.winSize} TND!` : 'Повезет в следующий раз!'
                                }
                            </Text>
                        </>

                    }
                    <Container
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
                            <Dice size={'92.26px'} dotSize={'14.68px'} value={dice.result} isRolling={isRolling} />
                        </Container>
                        <BetsPanel rollDice={rollDice} />
                    </Container>
                </Container>
            </Container>
        </>
    )
}

export default Game