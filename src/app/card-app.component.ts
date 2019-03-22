import { Component } from '@angular/core';
import { PlayingCard } from 'src/model/cardModel';
import { DeckStore } from './stores/deckStore';
import { Store } from './stores/store';
import cardReducer from './reducers/playingCardReducer';
import { GameService } from './services/gameService';

@Component({
  selector: 'card-app',
  templateUrl: './html/card-app.component.html'
})
export class CardAppComponent {
  title = 'card-app';

  constructor(){

  }
}
