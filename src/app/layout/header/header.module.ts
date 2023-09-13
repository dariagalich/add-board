import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderRoutingModule} from "./header.routing.module";
import {TreeComponent} from "../../shered/categories-tree-view/tree.component";
import {MatTreeModule} from "@angular/material/tree";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    TreeComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,

  ],
  exports: [
    TreeComponent,
  ]
})
export class HeaderModule { }
