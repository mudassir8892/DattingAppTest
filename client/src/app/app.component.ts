import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Hye Mudassir Ali!';
  users : any;

  constructor(private http: HttpClient){}

  ngOnInit(): void {
      this.http.get('https://localhost:5008/api/users').subscribe({
        next: response => this.users = response,
        error: error => console.log(error),
        complete: () => console.log("Request has completed")
      })
  }
}
