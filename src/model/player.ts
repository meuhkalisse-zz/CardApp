import { PlayingCard } from './cardModel';
import { HandModel } from './handModel';

export class PlayerModel{
    constructor(public name: string, public hand: HandModel = new HandModel()) {
    }

    public getHand() : Array<PlayingCard>{
        return this.hand.getHand();
    }
}