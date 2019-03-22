import { Component, Input } from '@angular/core';
import { PlayingCard } from 'src/model/cardModel';
import { CardValue } from 'src/model/cardValueEnum';
import { Suit } from 'src/model/suitEnum';

@Component({
    selector: 'discarded-list',
    templateUrl: '../html/discarded-list.component.html'
})
export class DiscardedListComponent{
    @Input() cardList: Array<PlayingCard>;

    getCardValueSymbol(card: PlayingCard): string{
        return CardValue[card.value];
    }
    getCardSuitSymbol(card: PlayingCard): string{
        return Suit[card.suit];
    }
}