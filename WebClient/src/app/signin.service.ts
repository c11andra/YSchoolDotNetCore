import { Injectable, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInService implements OnInit {
  private isSigningIn: BehaviorSubject<boolean>;

  getSigningInStatus(): Observable<boolean> {
    return this.isSigningIn.asObservable();
  }

  public setSigningInStatus(signingInstatus: boolean): void {
    this.isSigningIn.next(signingInstatus);
}

  ngOnInit(): void {

  }

  constructor() {
    this.isSigningIn = new BehaviorSubject<boolean>(false);
  }

}
