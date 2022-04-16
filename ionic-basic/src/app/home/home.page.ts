/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  // eslint-disable-next-line @typescript-eslint/member-ordering
  isLoged : any = false;
  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  constructor(private authSvc: AuthserviceService,
    private router: Router,
    private afAuth: AngularFireAuth) {}
  ngOnInit(): void {
    this.afAuth.authState.subscribe(response=>{
      this.isLoged = response;
    });
  }
  onLogout(){
    this.afAuth.auth.signOut();
    console.log('Logout!');
    this.router.navigateByUrl('/login');

  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  // eslint-disable-next-line @typescript-eslint/member-ordering


}
