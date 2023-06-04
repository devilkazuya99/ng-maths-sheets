
export abstract class QuestionSheetComponent {
    questions: Array<number> = [];
    symbol = "?";
    /**
     * 
     * @param size Question size. If not specified default = 100
     */
    constructor(symbol: string, size: number = 100) {
        this.symbol = symbol;
        for (let index = 0; index < size; index++) {
            this.questions.push(index + 1);
        }
    }
}
