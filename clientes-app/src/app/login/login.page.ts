import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { ModalErrorComponent } from '../modal-error/modal-error.component';
import { User } from '../shared/user';
import { AuthserviceService } from '../services/authservice.service';
import {FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';
//import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: User = new User();
  ionicForm: FormGroup;
  constructor(private router: Router,
    private modalCtrl: ModalController,
    private autSvc: AuthserviceService,
    private formBuilder: FormBuilder,
    public loadingController: LoadingController
    //,private firestore: AngularFirestore
    ) { }

  ngOnInit() {
    /*
    const usuario ={nombre:'Benito', activo:true,

    fechanaci:0};

      this.firestore.collection('usuario').add(usuario);
      */

    this.buildForm();
  }


  async onLogin(){
    const user = await this.autSvc.onLogin(this.user);
    if(user!=null && user.code ==undefined){
      console.log('Successfully logged in!');
      setTimeout(() => {
        this.loadingController.dismiss();
        this.router.navigate(['/home']);
      }, 650);
    }
    else{
      this.loadingController.dismiss();
      if(user.code){
        if(user.code=='auth/wrong-password' || user.code =='auth/invalid-email' || user.code=='auth/argument-error'){
          this.openModal(user);
        }
      }
    }
  }

  async openModal(user: any){
    const modal = await this.modalCtrl.create({
      component: ModalErrorComponent,
      componentProps:{
        error: 'Ingres password y/o contraseña'
      }
    });
    return await modal.present();
  }

  submitForm(){
    if(this.ionicForm.valid){
      this.user.email = this.ionicForm.get('email').value;
      this.user.password = this.ionicForm.get('password').value;
      this.presentLoadingWithOptions();
      this.onLogin();
    }
  }

  buildForm(){
    this.ionicForm = this.formBuilder.group({
      email: new FormControl('',{validators: [Validators.email,Validators.required]}),
      password: new FormControl('', {validators: [Validators.required, Validators.minLength(6), Validators.maxLength(6)]})
    });
  }

  hasError: any = (controlName: string, errorName: string) => {
		return !this.ionicForm.controls[controlName].valid &&
			this.ionicForm.controls[controlName].hasError(errorName) &&
			this.ionicForm.controls[controlName].touched;
	}


	notZero(control: AbstractControl) {
		if (control.value && control.value.monto <= 0) {
			return { 'notZero': true };
		}
		return null;
	}
  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      //spinner: null,
      //duration: 5000,
      message: 'Iniciando sesión...',
      translucent: true,
      //cssClass: 'custom-class custom-loading',
      backdropDismiss: true
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  }

}
