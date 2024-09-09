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
    const betStatee = useRecoilValue(betState)
    const setBalanceState = useSetRecoilState(userBalanceState)

    return async (bet) => {
        try {
            const gameData = await GameService.play(bet);
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
