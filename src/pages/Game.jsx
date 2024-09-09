import React, { useState } from "react";
import Button from "../shared/ui/Button";
import Container from "../shared/ui/Container";
import Header from "../shared/ui/Header";
import Text from "../shared/ui/Text/Text";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authState } from "../app/atoms/authAtom";
import BetsPanel from "../widgets/betsPanel";
import Dice from "../shared/ui/Dice/Dice";
import { betResultState } from "../app/atoms/betResultAtom";
import { diceResultState } from "../app/atoms/diceResultAtom";
import { betState } from "../app/atoms/betAtom";

const Game = () => {
    const isAusth = useRecoilValue(authState)

    const bet = useRecoilValue(betResultState)
    const dice = useRecoilValue(diceResultState)
    const betStatee = useSetRecoilState(betState)
    const [isRolling, setIsRolling] = useState(false);


    const rollDice = () => {
        setIsRolling(true);
        betStatee((prevstate) => ({
            size: prevstate.size,
            number: prevstate.number,
            type: prevstate.type,
            isRolling: true
        }))
        setTimeout(() => {
            setIsRolling(false);
            betStatee((prevstate) => ({
                size: prevstate.size,
                number: prevstate.number,
                type: prevstate.type,
                isRolling: false
            }))
        }, 2000);
    };
    return (
        <>
            <Container width={'100%'} minHeight={'100vh'} display={'flex'} fd={'column'} ai={'center'} jc={'center'}>
                <Container width={'100%'} zIndex={'10'}>
                    <Header isRolling={isRolling} />
                </Container>
                {
                    !isAusth &&
                    <Container position={'fixed'} width={'100%'} height={'100%'} zIndex={'5'} backColor={'inherit'} opacity={'0.5'}>

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
                        <Text fontSize={'20px'} font={'Inter-Bold'} zIndex={'9'} cursor={'pointer'}>
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
                        (isAusth && bet.status !== 'none' && !isRolling) &&
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
                    {
                        isRolling &&
                        <Text fontSize={'20px'} font={'Inter-Regular'}>
                            Бросаем кубик...
                        </Text>
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