import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/service/users/userInterface';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/service/users/users.service';

import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/service/login/login.service';
import { NotifyService } from 'src/app/service/notification/notify.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, AfterViewInit {

  saveUserBtn: boolean = false;
  showEntitlements: boolean = false;

  currentUser: IUser;
  userDetail: IUser;

  userForm: FormGroup = new FormGroup({
    userName: new FormControl({value: '', disabled: true}),
    userEmail: new FormControl({value: '', disabled: true}),
    userLogin: new FormControl({value: '', disabled: true}),
    userPassword: new FormControl({value: '****', disabled: true}),
  });

  get getShowEntitlements(){
    return this.showEntitlements = !this.showEntitlements
  }

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, 
              private userService: UserService, private loginService: LoginService, private notify: NotifyService) { }

  ngOnInit() {
    this.currentUser = this.loginService.currentUser
    this.activatedRoute.params.subscribe( data => {
      this.userService.getUserById(data['id']).subscribe( (user: IUser) => {
        this.userDetail = user['user']
        console.log(user)
        this.userForm.get('userName').setValue(this.userDetail.name)
        this.userForm.get('userEmail').setValue(this.userDetail.email)
        this.userForm.get('userLogin').setValue(this.userDetail.login)
      })
    })

  }
  ngAfterViewInit(){
  }

  editUser(): void{
    if (this.currentUser.can_edit_users !== 1){
      if ( this.currentUser.id === this.userDetail.id ){
        this.userForm.get('userName').enable();
        this.userForm.get('userLogin').enable();
        this.saveUserBtn = true;
        return
      }
      this.notify.showError("You do not have permission", "Permission")
      return
    }
    this.userForm.get('userName').enable();
    this.userForm.get('userLogin').enable();
    this.saveUserBtn = true;
  }

  saveUser(): void{
    const userNameValue = this.userForm.get('userName').value;
    const userLoginValue = this.userForm.get('userLogin').value;
    if (this.userForm.dirty && this.userForm.touched){
      if (userNameValue !== this.userDetail.name || userLoginValue !== this.userDetail.login){
        this.userService.updateUserById(this.userDetail.id, userNameValue, userLoginValue).subscribe( data => {
          this.notify.showSuccess(data['msg'], "User")
        }, error => {
          this.notify.showError('Server faild', "Server")
        })
      }
    }
    this.userForm.get('userName').disable();
    this.userForm.get('userLogin').disable();
    this.saveUserBtn = false;
  }


}
