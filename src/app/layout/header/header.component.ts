import { Component } from '@angular/core';
// import {MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
// import {MatButtonModule} from "@angular/material/button";

// @Component({
//   selector: 'dialog-animations-example',
//   styleUrls: ['dialog-animations-example.css'],
//   templateUrl: 'dialog-animations-example.html',
//   standalone: true,
//   imports: [MatButtonModule, MatDialogModule],
// })
// export class DialogAnimationsExample {
//   constructor(public dialog: MatDialog) {}
//
//   openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
//     this.dialog.open(DialogAnimationsExampleDialog, {
//       width: '250px',
//       enterAnimationDuration,
//       exitAnimationDuration,
//     });
//   }
// }

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  visibleTree: boolean = true

  // constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}

  showTree(){
    this.visibleTree = !this.visibleTree
  }

}


