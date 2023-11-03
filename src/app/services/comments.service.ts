import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Properties18} from "../api.interface";

const apiUrl = 'http://194.87.237.48:5000/'

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    private http: HttpClient,
  ) { }


  getAdvertComments(advertId: string): Observable<Properties18[]>{
    return this.http.get<Properties18[]>(apiUrl + 'Advert/' + advertId + '/Comments' )
  }

  createComment(advertId: string, commentsData:FormData = new FormData()): Observable<Properties18>{
    return this.http.post<Properties18>(apiUrl + 'Advert/' + advertId + '/comments', commentsData )
  }

  deleteComment(commentId:string){
    this.http.delete(apiUrl + 'Comment/' + commentId)
      .subscribe({
        next: () => {
          window.location.reload()
        }
      });
  }

  editComment(commentId:string, text: any){
    this.http.put(apiUrl + 'Comment/' + commentId, text)
      .subscribe({
        next: () => {
          window.location.reload()
        }
      });
  }

}
