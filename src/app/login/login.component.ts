import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide: boolean = true

  constructor(private router : Router){}

  onSubmit(data:any){
    console.log(data);
    // this.router.navigate(['/home', { data } ]);
  }
}
