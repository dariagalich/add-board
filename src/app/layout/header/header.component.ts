import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isVisibleTree: boolean = false

  showTree() {
    this.isVisibleTree = !this.isVisibleTree
    console.log(this.isVisibleTree)
  }

}

