import { Suit } from "./suitEnum";
import { CardValue } from './cardValueEnum';

export class PlayingCard{
    suit: string;
    value: string;

    constructor(suit: string, value: string) {
        this.suit = suit;
        this.value = value;
    }

    rank(): string {
        return `rank-${CardValue[this.value]}`;
    }
}