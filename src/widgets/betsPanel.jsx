import React, { useState } from "react";
import Container from "../shared/ui/Container";
import Text from "../shared/ui/Text/Text";
import Button from "../shared/ui/Button";
import DropDawnMenu from "../shared/ui/DropDawnMenu";

const BetsPanel = () => {
    const [isOpenMoney, setIsOpenMoney] = useState(false);
    const [isOpenNumbers, setIsOpenNumbers] = useState(false);
    const [number, setNumber] = useState('');
    const betValues = ['1.00', '2.00', '3.00', '5.00', '10.00', '25.00', '60.00', '100.00']
    const numbers = ['1', '2', '3', '4', '5', '6']

    const showMoneyHandler = () => {
        setIsOpenMoney(!isOpenMoney);
    };

    const showNumbersHandler = () => {
        setIsOpenNumbers(!isOpenNumbers);
        console.log('1')
    };

    const chooseNumberHandler = () => {
        console.log('1')

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
                            backColor={'#643F82'}
                            bb={'1px solid #9159BE'}
                            bgHover={'#8151A8'}
                            bbHover={'1px solid #AB69E2'}>
                            Четное
                        </Button>
                        <Button
                            backColor={'#643F82'}
                            bb={'1px solid #9159BE'}
                            bgHover={'#8151A8'}
                            bbHover={'1px solid #AB69E2'}>
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
                        >
                            От 1 до 3
                        </Button>
                        <Button
                            backColor={'#643F82'}
                            bb={'1px solid #9159BE'}
                            bgHover={'#8151A8'}
                            bbHover={'1px solid #AB69E2'}
                            onClick={showNumbersHandler}
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
                                                onClick={chooseNumberHandler}
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