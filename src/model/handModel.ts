import { PlayingCard } from './cardModel';
import { PlayerHandStore } from 'src/app/stores/playerHandStore';
import { HandAnalysorStore } from 'src/app/stores/handAnalysorStore';

export class HandModel {
    public result: string;
    private unsubsribe: UnsubscribeCallback;
    constructor(public handStore: PlayerHandStore = new PlayerHandStore(),
        private analysor: HandAnalysorStore = new HandAnalysorStore()) {
            this.unsubsribe = this.analysor.subscribe(() => {
                this.result = this.analysor.getState();
            });
    }

    public getHand() {
        return this.handStore.getState();
    }
    public analyse() {
        this.analysor.dispatch({ type: 'ANALYSE', payload: this.getHand() });
        this.unsubsribe();
    }
}