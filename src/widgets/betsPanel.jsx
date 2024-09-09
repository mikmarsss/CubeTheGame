import React, { useState } from "react";
import Container from "../shared/ui/Container";
import Text from "../shared/ui/Text/Text";
import Button from "../shared/ui/Button";
import DropDawnMenu from "../shared/ui/DropDawnMenu";
import { betState } from "../app/atoms/betAtom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useGame } from "../entities/hooks/useGame";
import { betResultState } from "../app/atoms/betResultAtom";
import { diceResultState } from "../app/atoms/diceResultAtom";
import { userBalanceState } from "../app/atoms/userBalance";

const BetsPanel = ({ rollDice }) => {
    const [isOpenMoney, setIsOpenMoney] = useState(false);
    const [isOpenNumbers, setIsOpenNumbers] = useState(false);
    const [state, setState] = useRecoilState(betState);

    const bet = useRecoilValue(betResultState)
    const dice = useRecoilValue(diceResultState)
    const setBalanceState = useSetRecoilState(userBalanceState)
    const betStatee = useRecoilValue(betState)
    const betValues = ['1.00', '2.00', '3.00', '5.00', '10.00', '25.00', '60.00', '100.00']
    const numbers = ['1', '2', '3', '4', '5', '6']

    const userBalance = useRecoilValue(userBalanceState)

    const play = useGame()

    const showMoneyHandler = () => {
        setIsOpenMoney(!isOpenMoney);
    };

    const showNumbersHandler = () => {
        setIsOpenNumbers(!isOpenNumbers);
    };

    const changeBalance = async () => {
        setBalanceState((prevstate) => ({
            balance: prevstate.balance - betStatee.size
        }))
    }

    const playTheGameHandler = async () => {
        await changeBalance()
        await rollDice()
        await play(state)
    }


    const setBetHandler = (type, number) => {
        setIsOpenNumbers(false)
        setState((prevState) => (
            {
                type: type,
                number: number,
                size: prevState.size
            }
        ))
    }


    return (
        <>
            <Container
                width={'338px'}
                height={'auto'}
                backColor={'transparent'}
                mt={'50px'}
                display={'flex'}
                fd={'column'}
                gap={'16px'}
            >
                <Container backColor={'transparent'} gap={'6px'} display={'flex'} fd={'column'}>
                    <Text >
                        Размер ставки
                    </Text>
                    <DropDawnMenu
                        onClick={showMoneyHandler}
                        isOpen={isOpenMoney}
                        options={betValues}
                    >
                        {
                            state.size
                        }
                    </DropDawnMenu>
                </Container>
                <Container
                    backColor={'transparent'}
                    display={'flex'}
                    fd={'column'}>
                    <Text >
                        Варианты ставок
                    </Text>
                    <Container
                        display={'flex'}
                        jc={'center'}
                        gap={'8px'}
                        mt={'4px'}>
                        <Button
                            backColor={'#643F82'}
                            bb={'1px solid #9159BE'}
                            bgHover={'#8151A8'}
                            bbHover={'1px solid #AB69E2'}
                            onClick={() => setBetHandler('even', 1)}
                            isActive={state.type === 'even' ? true : false}
                        >
                            Четное
                        </Button>

                        <Button
                            backColor={'#643F82'}
                            bb={'1px solid #9159BE'}
                            bgHover={'#8151A8'}
                            onClick={() => setBetHandler('odd', 1)}
                            isActive={state.type === 'odd' ? true : false}

                        >
                            Нечетное
                        </Button>
                    </Container>
                    <Container
                        display={'flex'}
                        jc={'center'}
                        gap={'8px'}
                        mt={'8px'}>
                        <Button
                            backColor={'#643F82'}
                            bb={'1px solid #9159BE'}
                            bgHover={'#8151A8'}
                            bbHover={'1px solid #AB69E2'}
                            onClick={() => setBetHandler('1to3', 1)}
                            isActive={state.type === '1to3' ? true : false}
                        >
                            От 1 до 3
                        </Button>

                        <Button
                            backColor={'#643F82'}
                            bb={'1px solid #9159BE'}
                            bgHover={'#8151A8'}
                            bbHover={'1px solid #AB69E2'}
                            onClick={() => setBetHandler('4to6', 1)}
                            isActive={state.type === '4to6' ? true : false}
                        >
                            От 4 до 6
                        </Button>
                    </Container>
                    <Button
                        backColor={'#643F82'}
                        bb={'1px solid #9159BE'}
                        bgHover={'#8151A8'}
                        bbHover={'1px solid #AB69E2'}
                        width={'338px'}
                        mt={'8px'}
                        onClick={showNumbersHandler}
                        isActive={state.type === 'number' ? true : false}
                        display={'flex'}
                        fd={'row'}
                        ai={'center'}
                        jc={'center'}
                        gap={'136px'}

                    >
                        Конкретное число
                        <Container
                            width={'27px'}
                            height={'22px'}
                            br={'4px'}
                            backColor={'white'}
                            display={'flex'}
                            fd={'column'}
                            ai={'center'}
                            jc={'center'}
                            opacity={state.type === 'number' ? '1' : '0.1'}
                            color={'black'}
                        >
                            {state.number}
                        </Container>
                    </Button>
                    {
                        isOpenNumbers &&
                        <>
                            <Container
                                width={'338px'}
                                height={'auto'}
                                backColor={'transparent'}
                                mt={'8px'}
                                display={'flex'}
                                fd={'row'}
                                fw={'wrap'}
                                jc={'center'}
                                gap={'2px'}
                            >
                                {
                                    numbers.map((item, index) => (
                                        <>
                                            <Button
                                                onClick={() => setBetHandler('number', item)}
                                                key={index}
                                            >
                                                {item}
                                            </Button>
                                        </>
                                    ))
                                }
                            </Container>
                        </>
                    }
                    <Button
                        backColor={'#37AC00'}
                        bb={'1px solid #55F30A'}
                        bgHover={'#41CA00'}
                        bbHover={'1px solid #7DFF3F'}
                        width={'338px'}
                        mt={'16px'}
                        disabled={(state.type === 'none' || userBalance.balance < betStatee.size) ? true : false}
                        onClick={playTheGameHandler}
                        mb={'40px'}
                    >
                        Сделать ставку
                    </Button>
                </Container>
            </Container>
        </>
    )
}

export default BetsPanel