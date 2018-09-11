import { ToastrService } from 'ngx-toastr';
import { LoginsService } from './../../services/logins.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private logServ: LoginsService, private msg: ToastrService) { }

  ngOnInit() {

    this.logServ.register('robertm3lendez@gmail.com', '123456');
  }

}
