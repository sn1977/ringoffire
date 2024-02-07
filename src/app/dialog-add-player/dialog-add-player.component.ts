import { Component } from '@angular/core';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})

export class DialogAddPlayerComponent {
  name: string = '';

  constructor(
      private dialogRef: MatDialogRef<DialogAddPlayerComponent>,
  ) {}
  onNoClick() {
    this.dialogRef.close();
  }
}

// constructor(public dialog: MatDialog) {}
//
// openDialog(): void {
//   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
//     data: {name: this.name, animal: this.animal},
//   });
//
//   dialogRef.afterClosed().subscribe(result => {
//     console.log('The dialog was closed');
//     this.animal = result;
//   });
// }