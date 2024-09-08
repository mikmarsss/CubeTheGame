import GameService from "../services/gameService";
import { diceResultState } from "../../app/atoms/diceResultAtom";
import { betState } from "../../app/atoms/betAtom";
import { betResultState } from "../../app/atoms/betResultAtom";
import Cookies from 'js-cookie';
import { useRecoilValue, useSetRecoilState } from "recoil";

export const useGame = () => {
    const setBetResult = useSetRecoilState(betResultState);
    const setDiceResult = useSetRecoilState(diceResultState);
    const bet = useRecoilValue(betState)

    return async (bet) => {
        try {
            const gameData = await GameService.play(bet);
            console.log(gameData.isWin, gameData.result, gameData.wonMoney)
            setBetResult(
                {
                    status: gameData.isWin,
                    winSize: gameData.wonMoney,
                    message: gameData.message
                }
            )
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
