import { Injectable } from '@angular/core';
import { PlayersStore } from '../stores/playerListStore';
import { GameModel } from 'src/model/gameModel';
import { PlayerModel } from 'src/model/player';
import { PlayerHandStore } from '../stores/playerHandStore';
import { DeckStore } from '../stores/deckStore';
import { PlayingCard } from 'src/model/cardModel';
import { HandModel } from 'src/model/handModel';

@Injectable({
    providedIn: 'root',
})

export class GameService {
    constructor() {
    }

    currentGame: GameModel;

    createGame(name: string, cardInHand: number) {
        this.currentGame = new GameModel(name, cardInHand);
        this.newRound();
    }

    public getDeck(): Array<PlayingCard> {
        return this.currentGame.deckStore.getState();
    }

    public newRound() {
        this.currentGame.deckStore.dispatch({ type: 'NEW' });
        this.currentGame.deckStore.dispatch({ type: 'SHUFFLE' });
        this.clearHand();
        this.distributeCards();
        this.calculateHands();
    }

    public addPlayer(name: string) {
        this.currentGame.addPlayer(new PlayerModel(name));
    }

    distributeCards() {
        for (let i = 0; i < this.currentGame.cardsInHand; i++) {
            this.playerList().forEach(player => {
                player.hand.handStore.dispatch({ type: 'ADD', payload: this.getDeck().pop() })
            });
        }
    }

    calculateHands() {
        this.playerList().forEach(player => {
            player.hand.analyse();
        });
    }

    playerList(): Array<PlayerModel> {
        return this.currentGame.playersStore.getState();
    }

    clearHand() {
        this.currentGame.playersStore.getState().forEach(player => {
            player.hand.handStore.dispatch({ type: 'CLEAR' });
        });
    }

}