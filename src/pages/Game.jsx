import React from "react";
import Button from "../shared/ui/Button";
import Container from "../shared/ui/Container";
import Header from "../shared/ui/Header";
import Text from "../shared/ui/Text/Text";
const Game = () => {
    return (
        <>
            <Container width={'100%'} minHeight={'100vh'} display={'flex'} fd={'column'} ai={'center'} jc={'center'}>
                <Container width={'100%'}>
                    <Header />
                </Container>
                <Container width={'100%'} height={'100%'} display={'flex'} fd={'column'} fg={'1'} ai={'center'} mt={'118px'}>
                    <Text fontSize={'20px'} font={'Inter-Bold'}>
                        Войдите, чтобы продолжить
                    </Text>
                    <Button backColor={'#643F82'} bb={'1px solid #9159BE'}>
                        Четное
                    </Button>
                </Container>
            </Container>
        </>
    )
}

export default Game