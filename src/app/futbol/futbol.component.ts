import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-futbol',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule
  ],
  templateUrl: './futbol.component.html',
  styleUrl: './futbol.component.css'
})
export class FutbolComponent {

  constructor(private http: HttpClient) {
  }

  crida(estadi: string){
    this.http.put('http://localhost:3020/guilhermecantanhede/estadi', {estadi: estadi}).subscribe()
    this.http.get('http://localhost:3020/guilhermecantanhede/jugadors').subscribe((res) => {
      console.log(res)
    })
  }
}
