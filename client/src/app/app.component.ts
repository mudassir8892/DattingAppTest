import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { AccountService } from './_services/account.service';
import { User } from './_models/user';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AccountService],
  imports: [RouterOutlet, HttpClientModule, NavComponent, HomeComponent],
})
export class AppComponent implements OnInit {
  title = 'Hye Mudassir Ali!';
  //users: any;
  loggedIn = false;

  constructor(
    //private http: HttpClient,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    //this.getUsers();
    this.setCurrentUser();
  }

  // getUsers() {
  //   this.http.get('https://localhost:5008/api/users').subscribe({
  //     next: (response) => (this.users = response),
  //     error: (error) => console.log(error),
  //     complete: () => console.log('Request has completed'),
  //   });
  // }

  setCurrentUser() {
    const userString = localStorage.getItem('user');
    //console.log(userString);
    if (!userString) return;
    //console.log(userString);
    const user: User = JSON.parse(userString);
    //console.log(userString);
    //debugger;
    this.accountService.setCurrentUser(user);
    console.log(user);
  }
}
