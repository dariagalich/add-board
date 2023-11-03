import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Router} from "@angular/router";
import {ShortAdvert} from "../interfaces";

const apiUrl = 'http://194.87.237.48:5000/'

@Injectable({
  providedIn: 'root'
})

export class AdsService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
  }

  adAdd(form: any): Observable<ShortAdvert> {
    return this.http.post<ShortAdvert>(apiUrl + 'Advert', form).pipe(
      tap(() => {
        this.router.navigate(['/user-ads']).then(() => {})
      }))
  }

  deleteAdd(advertId: string) {
    console.log(advertId);
    this.http.delete(apiUrl + 'Advert/' + advertId).subscribe({
      next: () => {
        this.router.navigate(['/user-ads']).then(() => {})
      }
    });
  }

  editAdd(advertId: string, form: FormData = new FormData()) {
    this.http.put(apiUrl + 'Advert/' + advertId,form).subscribe({
      next: () => {
        this.router.navigate(['/user-ads']).then(() => {})
      }
    })
  }

}
