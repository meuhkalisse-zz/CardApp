import { Injectable } from '@angular/core';
import { PlayingCard } from '../../model/cardModel';
import { Store } from './store';
import cardReducer from '../reducers/playingCardReducer';
import { PlayerModel } from 'src/model/player';
import handReducer from '../reducers/handReducer';

@Injectable({
    providedIn: 'root',
})

export class PlayerHandStore extends Store<Array<PlayingCard>>{
    constructor() 
    {
        super(handReducer, []);
    }
}