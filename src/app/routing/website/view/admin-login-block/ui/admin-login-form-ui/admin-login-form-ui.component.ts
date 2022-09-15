import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {F} from "@angular/cdk/keycodes";

@Component({
  selector: 'app-admin-login-form-ui',
  templateUrl: './admin-login-form-ui.component.html',
  styleUrls: ['./admin-login-form-ui.component.scss']
})
export class AdminLoginFormUiComponent implements OnInit {

  formGroup: FormGroup;

  @Input() formError = "";
  @Output() login = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

    this.formGroup = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  onFormChange() {
    this.formError="";
  }

  onSubmit() {
    console.log("UI",this.formGroup.value);
    this.login.emit(this.formGroup.value)
  }

}
