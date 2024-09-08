export default class GameService {

    static async play(bet) {
        const { type, number, size } = bet
        const random = Math.random()
        const scaled = random * 6;
        const result = Math.floor(scaled) + 1;
        if (type === 'number') {
            const isWin = number == result
            const wonMoney = isWin ? size * 3 : 0
            return { isWin, wonMoney, result }
        }
        else if (type === 'odd' || type === 'even') {
            const isEven = this.isEven(result)
            const isWin = type === 'even' && isEven || type === 'odd' && !isEven
            const wonMoney = isWin ? size * 2 : 0

            return { isWin, wonMoney, result }
        }
        else if (type === '1to3' || type === '4to6') {
            const isFrom1To3 = this.isFrom1To3(result)
            const isWin = type === '1to3' && isFrom1To3 || type === '4to6' && !isFrom1To3
            const wonMoney = isWin ? size * 2 : 0

            return { isWin, wonMoney, result }
        }
    }

    static isEven(number) {
        return number % 2 === 0;
    }

    static isFrom1To3(number) {
        return number <= 3;
    }
}


