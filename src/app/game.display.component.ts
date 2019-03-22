import { Component, Input } from '@angular/core';
import { PlayingCard } from 'src/model/cardModel';
import { DeckStore } from './stores/deckStore';
import { Store } from './stores/store';
import cardReducer from './reducers/playingCardReducer';
import { GameService } from './services/gameService';
import { GameModel } from 'src/model/gameModel';
import { Subject } from 'rxjs';
import { PlayerModel } from 'src/model/player';
import { CardValue } from 'src/model/cardValueEnum';
import { Suit } from 'src/model/suitEnum';

@Component({
  selector: 'game-display',
  templateUrl: './html/game.display.component.html'
})
export class GameDisplayComponent {
  
  constructor(public gameService: GameService){
  }

  getDeck() {
      return this.gameService.getDeck();
  }

  getPlayers() {
      return this.gameService.playerList();
  }

  playerHand(player: PlayerModel){
      return player.getHand();
  }

  getCardValueSymbol(card: PlayingCard){
    return CardValue[card.value];
  }

  getCardSuitSymbol(card: PlayingCard){
    return Suit[card.value];
  }

  distributeCards(){
      this.gameService.newRound();
  }

  endGame(){
      this.gameService.currentGame = undefined;
  }
}
