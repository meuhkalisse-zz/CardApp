import { Injectable } from '@angular/core';
import { Store } from './store';
import { PlayerModel } from 'src/model/player';
import playerListReducer from '../reducers/playerListReducer';

@Injectable({
    providedIn: 'root',
})

export class PlayersStore extends Store<Array<PlayerModel>>{
    constructor() 
    {
        super(playerListReducer, []);
    }
}