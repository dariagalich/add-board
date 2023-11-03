import {Component, OnInit} from '@angular/core';
import {CommentsService} from "../../services/comments.service";
import {map, Observable} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";
import {Properties18} from "../../api.interface";
import {UsersService} from "../../services/users.service";
import {AuthService} from "../../services/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {AuthorizationDialogComponent} from "../authorization-dialog/authorization-dialog.component";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments$!: Observable<Properties18[]> | null
  advertId!: string
  commentsArray!: Properties18[];
  commentsText!: string
  userId!: string
  isAuth: boolean = this.authService.isAuthenticated()
  toggleEditComment = false
  commentEditId!: string

  constructor(
    private commentsService: CommentsService,
    private route: ActivatedRoute,
    private userService: UsersService,
    private authService: AuthService,
    private matDialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.advertId = params['id'];
    })

    this.getComments()

    if (this.isAuth) {
      this.userService.getCurrentUser().subscribe(user => {
        this.userId = user.id;
      });
    }
  }

  getComments() {
    return this.commentsService.getAdvertComments(this.advertId)
      .pipe(
        map(data => data as Properties18[])
      ).subscribe(result => {
        this.commentsArray = result
      })
  }

  getTextFromInput(event: any) {
    this.commentsText = event.target.value
    console.log(this.commentsText)
  }

  editCommentText(commentId:string,commentText: string){
    this.commentEditId = commentId
    this.commentsText = commentText
    this.toggleEditComment = !this.toggleEditComment
  }

  createComment() {
    if (!this.isAuth) {
      this.openDialog()
    } else if (this.commentsText) {
      let commentsParentId = ''
      const formData = new FormData()

      formData.append('text', this.commentsText)
      formData.append('parentId', commentsParentId)

      this.commentsService.createComment(this.advertId, formData)
        .subscribe({
          next: () => {
            window.location.reload()
          }
        });
    }
  }

  deleteComment(commentId: string) {
    this.commentsService.deleteComment(commentId)
  }

  editComment(commentId: string, text: string) {
    const jsonObject = {
      text: text
    }
    this.commentsService.editComment(commentId,jsonObject)
  }

  openDialog() {
    this.matDialog.open(AuthorizationDialogComponent)
  }
}
