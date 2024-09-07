import React, { useState } from "react";
import Container from "../shared/ui/Container";
import Text from "../shared/ui/Text/Text";
import Button from "../shared/ui/Button";
import DropDawnMenu from "../shared/ui/DropDawnMenu";
import { betState } from "../app/atoms/betAtom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const BetsPanel = () => {
    const [isOpenMoney, setIsOpenMoney] = useState(false);
    const [isOpenNumbers, setIsOpenNumbers] = useState(false);
    const betValues = ['1.00', '2.00', '3.00', '5.00', '10.00', '25.00', '60.00', '100.00']
    const numbers = ['1', '2', '3', '4', '5', '6']
    const [state, setState] = useRecoilState(betState);

    const showMoneyHandler = () => {
        setIsOpenMoney(!isOpenMoney);
    };

    const showNumbersHandler = () => {
        setIsOpenNumbers(!isOpenNumbers);
    };

    const setBetHandler = (type, number) => {
        if(state.type === 'number'){
            setIsOpenNumbers(false)
        }
        setState({
            type: type,
            number: number
        });

    }

    return (
        <>
            <Container
                border={'1px solid red'}
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
                            backColor={state.type === 'even' ? '#F6A200' : '#643F82'}
                            bb={state.type === 'even' ? '1px solid #D77400' : '1px solid #9159BE'}
                            bgHover={'#8151A8'}
                            bbHover={'1px solid #AB69E2'}
                            onClick={() => setBetHandler('even')}
                            >
                            Четное
                        </Button>

                        <Button
                            backColor={state.type === 'odd' ? '#F6A200' : '#643F82'}
                            bb={state.type === 'odd' ? '1px solid #D77400' : '1px solid #9159BE'}
                            bgHover={'#8151A8'}
                            onClick={() => setBetHandler('odd')}
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
                            backColor={state.type === '1to3' ? '#F6A200' : '#643F82'}
                            bb={state.type === '1to3' ? '1px solid #D77400' : '1px solid #9159BE'}
                            bgHover={'#8151A8'}
                            bbHover={'1px solid #AB69E2'}
                            onClick={() => setBetHandler('1to3')}
                        >
                            От 1 до 3
                        </Button>

                        <Button
                            backColor={state.type === '4to6' ? '#F6A200' : '#643F82'}
                            bb={state.type === '4to6' ? '1px solid #D77400' : '1px solid #9159BE'}
                            bgHover={'#8151A8'}
                            bbHover={'1px solid #AB69E2'}
                            onClick={() => setBetHandler('4to6')}
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
                    >
                        Конкретное число
                    </Button>
                    {
                        isOpenNumbers &&
                        <>
                            <Container
                                width={'338px'}
                                height={'auto'}
                                backColor={'transparent'}
                                mt={'8px'}
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
                </Container>
            </Container>
        </>
    )
}

export default BetsPanel