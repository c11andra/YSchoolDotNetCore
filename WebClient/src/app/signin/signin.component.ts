import { Component, OnInit, OnDestroy } from '@angular/core';
import { SignInService } from '../signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SignInComponent implements OnDestroy {
  
  constructor(private signInService:SignInService) { 
    this.signInService.setSigningInStatus(true);
  }

  ngOnDestroy(): void {
    this.signInService.setSigningInStatus(false);
  }

}
