import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from "../components/main-page/main-page.component";
import { Navbar } from "../components/navbar/navbar";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AKAR');
}
