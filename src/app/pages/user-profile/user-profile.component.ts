import {Component} from '@angular/core';
import {FormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Properties22} from "../../api.interface";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  UserEditForm: UntypedFormGroup = new UntypedFormGroup({})
  user!: Properties22

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router,
  ) {
    this.userService.getCurrentUser().subscribe((response: Properties22) => {
      this.user = response
    })
    this._buildFormUser()
  }

  private _buildFormUser() {
    this.UserEditForm = this.fb.group({
      name: ['', [Validators.required]],
      login: ['', [Validators.required, Validators.pattern(/^(8|\+7)[\-\s]?\(?\d{3}\)?[\-\s]?[\d\-\s]{7,10}$/mg)]],
      password: ['', [Validators.required]],
    })
  }

  onSubmit() {
    if (this.UserEditForm.valid) {

      const formData = new FormData()

      formData.append('name', this.UserEditForm.get('name')?.value)
      formData.append('login', this.UserEditForm.get('login')?.value)
      formData.append('password', this.UserEditForm.get('password')?.value)

      console.log('id', this.user.id)
      this.userService.editUserName(this.user.id, formData).subscribe({
        next: () => {
          this.router.navigate(['/user-ads']).then(() => {
          })
        }
      })
    }
  }
}
