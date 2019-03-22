import { Injectable } from '@angular/core';
import { PlayingCard } from '../../model/cardModel';
import { Suit } from '../../model/suitEnum';
import { CardValue } from '../../model/cardValueEnum';
import { Store } from './store';
import cardReducer from '../reducers/playingCardReducer';

@Injectable({
    providedIn: 'root',
})

export class DeckStore extends Store<Array<PlayingCard>>{
    constructor() 
    {
        super(cardReducer, []);
    }
}