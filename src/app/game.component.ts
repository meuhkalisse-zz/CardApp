import { Component } from '@angular/core';
import { GameService } from './services/gameService';
import { Subject } from 'rxjs';
import { ToasterService } from 'angular2-toaster';

@Component({
    selector: 'game',
    templateUrl: './html/game.component.html'
})
export class GameComponent {
    public gameName: string = "new game";
    public nbPlayer: number = 2;
    public cardInHand: number = 5;

    constructor(public gameService: GameService, private toasterService: ToasterService) {
    }

    createGame() {
        if ((this.cardInHand * this.nbPlayer) <= 52) {

            this.gameService.createGame(this.gameName, this.cardInHand);

            for (let i = 0; i < this.nbPlayer; i++) {
                this.gameService.addPlayer(`Joueur ${i + 1}`);
            }
            this.toasterService.pop('success', 'Game Creation', `Game "${this.gameName}" successfully created`);
        }else{
            this.toasterService.pop('error', 'Game Creation', `Game cannot be created, there is not enough card in the deck.`);
        }
    }

    gameIngoing(): boolean{
        return this.gameService.currentGame !== undefined;
    }

}
