import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { response } from 'express';
import { error } from 'console';
import { ToastrService } from 'ngx-toastr';
//import { ToastrService } from 'ngx-toastr';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  // @Input() usersFromHomeComponent: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(
    private accountService: AccountService,
    private toastr: ToastrService
  ) {}

  register() {
    this.accountService.register(this.model).subscribe({
      next: () => {
        //console.log(response);
        this.cancel();
      },
      error: (error) => {
        this.toastr.error(error.error), console.log(error);
      }, //console.log(error),
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
    //console.log('cancelled');
  }
}
