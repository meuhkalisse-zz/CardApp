import { Injectable } from '@angular/core';
import { PlayingCard } from '../../model/cardModel';
import { Store } from './store';
import cardReducer from '../reducers/playingCardReducer';
import { PlayerModel } from 'src/model/player';
import handReducer from '../reducers/handReducer';
import handAnalysorReducer from '../reducers/handAnalysorReducer';

@Injectable({
    providedIn: 'root',
})

export class HandAnalysorStore extends Store<string>{
    constructor() 
    {
        super(handAnalysorReducer, "");
    }
}