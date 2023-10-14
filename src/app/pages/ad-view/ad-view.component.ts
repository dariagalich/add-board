import { Component } from '@angular/core';
import {Observable, switchMap} from "rxjs";
import {Properties} from "../../api.interface";
import {ActivatedRoute, Params} from "@angular/router";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-ad-view',
  templateUrl: './ad-view.component.html',
  styleUrls: ['./ad-view.component.scss'],
})
export class AdViewComponent {

  product$!: Observable<Properties>;

  constructor(
    private rote: ActivatedRoute,
    private productService: ProductsService,
  ) {
  }

  ngOnInit() {
    this.product$ = this.rote.params
      .pipe(switchMap((params: Params) => {
        return this.productService.getById(params['id'])
      }))
  }
}
