import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AccountService } from '../_services/account.service';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { error } from 'console';
import { User } from '../_models/user';
import { Route, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Observable, Subscription, of } from 'rxjs';
import { privateDecrypt } from 'crypto';
import { ToastrModule, ToastrService } from 'ngx-toastr';
//import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    RouterLinkActive,
    //ToastrModule, // ToastrModule added
    //BrowserModule,
    //BsDropdownModule,
    //BrowserAnimationsModule,
    CommonModule,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  providers: [AccountService],
})
export class NavComponent implements OnInit {
  // implements OnInit
  model: any = {};
  //loggedIn = false;
  // Initialize currentUser$ as an observable emitting null by default
  //   Declaration: currentUser$: Observable<User | null> declares a property that can hold an observable emitting User or null values.
  // Initialization: = of(null); initializes this observable to immediately emit null and then complete, which acts as a default state.
  //currentUser$: Observable<User | null> = of(null);

  currentUser: User | null = null;

  constructor(
    public accountService: AccountService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit called');
    //this.currentUser$ = this.accountService.currentUser$;
    //this.getCurrentUser();
  }

  // getCurrentUser(): void {
  //   this.accountService.currentUser$.subscribe({
  //     next: (user) => {
  //       this.currentUser = user;
  //       this.loggedIn = !!user; // Convert user to boolean to check if logged in // true, because a non-empty string is truthy
  //       console.log('User logged in:', this.loggedIn, this.currentUser);
  //     },
  //     error: (error) => console.error('Error:', error),
  //   });
  // }

  login() {
    //debugger;
    this.accountService.login(this.model).subscribe({
      next: (_) => this.router.navigateByUrl('/members'),
      error: (error) => this.toastr.error(error.error),
      //console.log(error),
      // next: (response) => {
      //   //console.log(response);
      //   this.router.navigateByUrl('/members');
      //   //this.loggedIn = true;
      // },
      // error: (error) => console.log(error),
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
    //this.loggedIn = false;
  }
}
