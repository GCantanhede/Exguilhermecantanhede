import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FutbolComponent} from "./futbol/futbol.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FutbolComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Exguilhermecantanhede';
}
