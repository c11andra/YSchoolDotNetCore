import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { SignInService } from '../signin.service';

//import { AlertService, AuthenticationService } from '../_services';

@Component({
  selector: 'app-signin',
  templateUrl: 'signin.component.html',
  styleUrls: ['signin.component.scss'],
})
export class SignInComponent implements OnInit, OnDestroy {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    hidePass = true;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private signInService:SignInService
     //  private authenticationService: AuthenticationService,
      //  private alertService: AlertService
    ) {
        signInService.setSigningInStatus(true);
        // redirect to home if already logged in
        // if (this.authenticationService.currentUserValue) { 
        //     this.router.navigate(['/']);
        // }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    ngOnDestroy()
    {
        this.signInService.setSigningInStatus(false);
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    showUsernameError():boolean
    {
        if(this.f.username.errors)
        {
            return this.submitted && this.f.username.errors.required;
        }
        return false;
    }

    showPasswordError():boolean
    {
        if(this.f.password.errors)
        {
            return this.submitted && this.f.password.errors.required;
        }
        return false;
    }

    onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }

       // this.loading = true;
        // this.authenticationService.login(this.f.username.value, this.f.password.value)
        //     .pipe(first())
        //     .subscribe(
        //         data => {
        //             this.router.navigate([this.returnUrl]);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
    }
}
