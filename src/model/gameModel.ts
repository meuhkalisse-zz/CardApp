import { PlayersStore } from 'src/app/stores/playerListStore';
import { PlayerModel } from './player';
import { DeckStore } from 'src/app/stores/deckStore';

export class GameModel{
    constructor(public name: string,
                public cardsInHand: number,
         public deckStore:DeckStore = new DeckStore(),
         public playersStore: PlayersStore = new PlayersStore()) {
    }

    addPlayer(player: PlayerModel){
        this.playersStore.dispatch({type: 'ADD', payload: player});
    }
}