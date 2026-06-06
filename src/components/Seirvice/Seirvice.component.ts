import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive, Router } from "@angular/router";
import { ProfileComponent } from "../profile/profile.component";
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthentcationService } from '../../service/Authentcation.service';
@Component({
  selector: 'app-Seirvice',
  templateUrl: './Seirvice.component.html',
  styleUrls: ['./Seirvice.component.css'],
  imports: [RouterLink, RouterOutlet, RouterLinkActive , MatIconModule, CommonModule ,FormsModule]
})
export class SeirviceComponent implements OnInit {

  constructor(private _Router:Router , private AuthentcationService:AuthentcationService) { }

  ngOnInit() {
  }


  backtomain(){
    this.AuthentcationService.logout()
  }
  aboutpage(){
    this._Router.navigate([('/about')])
  }



  isSidebarOpen: boolean = false;

  toggleSidebar() {
    this.isSidebarOpen = true;
  }

  nonToggle(){
    this.isSidebarOpen = false;
  }




}
