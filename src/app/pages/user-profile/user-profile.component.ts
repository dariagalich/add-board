import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {UsersService} from "../../services/users.service";
import {ActivatedRoute, Params} from "@angular/router";
import {User} from "../../interfaces";


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  public user$!: Observable<User>;
  public user!: User;
  userId!: string

  constructor(
    public userService: UsersService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.userId = params['id'];
    })

    this.getUser()

  }

  getUser() {
    this.userService.getUserById(this.userId).subscribe((response:User)=>{
      this.user =  response
    })
  }

  async setUser(){
   await this.userService.getUserById(this.userId)
     .subscribe(result => {
        this.user = result
        console.log('user ', this.user)
      })
  }

}
