import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class LoginsService {

  constructor(private authServ: AngularFireAuth) { }

  register(email: string, password: string) {
    this.authServ.auth.createUserWithEmailAndPassword(email, password)
    .then()
    .catch(err => console.log(err));
  }
}
