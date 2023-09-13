import { Component } from '@angular/core';
import {MatGridListModule} from "@angular/material/grid-list";

@Component({
  selector: 'app-ad-view',
  templateUrl: './ad-view.component.html',
  styleUrls: ['./ad-view.component.scss'],
  standalone: true,
  imports: [MatGridListModule],
})
export class AdViewComponent {

}
