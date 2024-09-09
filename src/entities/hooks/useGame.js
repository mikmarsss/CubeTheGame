import GameService from "../services/gameService";
import { diceResultState } from "../../app/atoms/diceResultAtom";
import { betState } from "../../app/atoms/betAtom";
import { betResultState } from "../../app/atoms/betResultAtom";
import Cookies from 'js-cookie';
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { userBalanceState } from "../../app/atoms/userBalance";

export const useGame = () => {
    const setBetResult = useSetRecoilState(betResultState);
    const setDiceResult = useSetRecoilState(diceResultState);
    const bet = useRecoilValue(betState)
    const setBalanceState = useSetRecoilState(userBalanceState)

    const EditBalance = async() => {
        setBalanceState((prevState) => ({
            balance: prevState.balance - bet.size
        }))
    }

    return async (bet) => {
        try {
            await EditBalance()
            const gameData = await GameService.play(bet);
            console.log(gameData.isWin, gameData.result, gameData.wonMoney)
            setBetResult(
                {
                    status: gameData.isWin,
                    winSize: gameData.wonMoney,
                }
            )
            if (gameData.isWin) {
                setBalanceState((prevState) => ({
                    balance: prevState.balance + gameData.wonMoney
                }));
            }
            setDiceResult({
                result: gameData.result
            })
            return gameData;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

};
