import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  durationInSeconds = 3;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.open("You're Awesome!!!",'', {
      duration: this.durationInSeconds * 1000,
      panelClass: ['custom-snackbar'],
    });
  }
}
