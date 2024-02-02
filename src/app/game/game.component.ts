import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Game} from "../../models/game";
import {PlayerComponent} from "../player/player.component";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import {DialogAddPlayerComponent} from '../dialog-add-player/dialog-add-player.component';
import {GameInfoComponent} from '../game-info/game-info.component';


@Component({
    selector: 'app-game',
    standalone: true,
    imports: [CommonModule, PlayerComponent, MatButtonModule, MatIconModule, GameInfoComponent],
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent {
    takeCardAnimation: boolean = false;
    currentCard: string = '';
    game: Game = new Game();

    constructor(public dialog: MatDialog) {
        this.newGame();
    }

    newGame() {
        this.game = new Game();
        console.log(this.game);
    }

    takeCard() {
        const card = this.game.stack.pop();
        if (card !== undefined) {
            if (!this.takeCardAnimation) {
                this.currentCard = card;
                this.takeCardAnimation = true;
                console.log('New card: ' + this.currentCard);
                console.log('Game is', this.game);

                this.game.currentPlayer++;
                this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
                setTimeout(() => {
                    this.game.playedCards.push(this.currentCard);
                    this.takeCardAnimation = false;
                }, 1000);
            }
        } else {
            // if no cards left in stack
            console.log("Der Stapel ist leer.");
            // oder setzen Sie currentCard auf einen Standardwert oder Fehlerwert
            // this.currentCard = 'Keine Karten mehr im Stapel';
        }
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogAddPlayerComponent);

        dialogRef.afterClosed().subscribe((name: string) => {
            if (name && name.length == 0) {
                this.game.players.push(name);
            }
        });
    }
}
