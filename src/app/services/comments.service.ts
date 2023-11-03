import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comment} from "../interfaces";

const apiUrl = 'http://194.87.237.48:5000/'

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    private http: HttpClient,
  ) { }


  getAdvertComments(advertId: string): Observable<Comment[]>{
    return this.http.get<Comment[]>(apiUrl + 'Advert/' + advertId + '/Comments' )
  }

  createComment(advertId: string, commentsData:FormData = new FormData()): Observable<Comment>{
    return this.http.post<Comment>(apiUrl + 'Advert/' + advertId + '/comments', commentsData )
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
