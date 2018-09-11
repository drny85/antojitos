import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class LoginsService {

  constructor(private authServ: AngularFireAuth, private msg: ToastrService ) { }

  register(email: string, password: string) {
    this.authServ.auth.createUserWithEmailAndPassword(email, password)
    .then((res) => {this.msg.success('Registration Succesfull', 'Registed');
    console.log(res);
  })
    .catch(err => console.log(err));
  }
}
