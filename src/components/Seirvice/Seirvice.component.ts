import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive, Router } from "@angular/router";
import { ProfileComponent } from "../profile/profile.component";
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-Seirvice',
  templateUrl: './Seirvice.component.html',
  styleUrls: ['./Seirvice.component.css'],
  imports: [RouterLink, RouterOutlet, RouterLinkActive , MatIconModule]
})
export class SeirviceComponent implements OnInit {

  constructor(private _Router:Router) { }

  ngOnInit() {
  }


  backtomain(){
    this._Router.navigate([('/main')])
  }




}
