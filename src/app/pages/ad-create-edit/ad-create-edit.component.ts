import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-ad-create-edit',
  templateUrl: './ad-create-edit.component.html',
  styleUrls: ['./ad-create-edit.component.scss']
})
export class AdCreateEditComponent implements OnInit{
  adCreateForm!: FormGroup

  ngOnInit() {
    this.adCreateForm = new FormGroup({})
  }
  submit(){

  }
}
