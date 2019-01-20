import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnInit, Component, OnDestroy } from '@angular/core';
import { SignInService } from '../signin.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.scss'],
})
export class SideNavComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  isLoggedIn: boolean = false;
  isSigningIn: boolean = false;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private signInService: SignInService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.signInService.getSigningInStatus().subscribe(s=>this.isSigningIn = s);
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
