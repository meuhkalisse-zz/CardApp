import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CardAppComponent } from './card-app.component';
import { DiscardedListComponent } from './Cards/discarded-list.component';
import { DeckStore } from './stores/deckStore';
import { GameComponent } from './game.component';
import { GameService } from './services/gameService';
import { GameDisplayComponent } from './game.display.component';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    CardAppComponent,
    DiscardedListComponent,
    GameComponent,
    GameDisplayComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToasterModule.forRoot()
  ],
  providers: [DeckStore, GameService, ToasterService],
  bootstrap: [CardAppComponent]
})
export class AppModule { }