import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


const { minLength, required, pattern, requiredTrue } = Validators;


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() onAddUser = new EventEmitter ;

  firstName : string = '';
  lastName : string = '';
  birthday: string = '';
  phoneNumber: string = '';
  email: string = '' ;
  isMessageOnBirthday: Boolean = true;

  onSubmit() {
    const newUser = {
      firstName : this.firstName,
      lastName: this.lastName,
      birthday: this.birthday,
      phoneNumber: this.phoneNumber,
      email: this.email,
      isMessageOnBirthday: this.isMessageOnBirthday,
    }

    if (this.form.valid) {
      this.onAddUser.emit(console.log('new: ', newUser));

      // to clear the form after submitting
      this.firstName = '';
      this.lastName = '';
      this.birthday= '';
      this.phoneNumber= '';
      this.email= '';
      this.isMessageOnBirthday= false;
    }

  }

  addUser(user : any) {
    console.log(user);
  }
  
  date = new Date();

  formattedDateValue = ''


  public inputValidator(event: any) {
    //console.log(event.target.value);
    const pattern = /^[a-zA-Z_ ]*$/;
    //let inputChar = String.fromCharCode(event.charCode)
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^a-zA-Z_ ]/g, "");
      // invalid character, prevent input
    }
  }


  public formattedDate(event: any) {
    //let inputChar = String.fromCharCode(event.charCode)
    if (event.target.value) {
      this.formattedDateValue = event.target.value.split('/').join('-');
      console.log('aaa: ', this.formattedDateValue)
      // invalid character, prevent input
    }
  }

  form
  constructor() {
   this.form= new FormGroup({
    firstName: new FormControl('', [required, minLength(3)]),
    lastName: new FormControl('', [required, minLength(5)]),
    birthday: new FormControl(),
    phoneNumber: new FormControl(),
    email: new FormControl('',[
      required,
      pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    isMessageOnBirthday: new FormControl(),
  })
   
  }

  ngOnInit(): void {}

  // to remove the value if it has any letters or symbols even if it pasted
  onlyNumberic(){

    if(!Number(this.phoneNumber)) {
      this.phoneNumber = ""
    }
  }
}
