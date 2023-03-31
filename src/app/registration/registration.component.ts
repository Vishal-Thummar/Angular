import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  hide: boolean = true

  constructor(private router : Router){}

  onSubmit(data:any){
    console.log(data);
    data = JSON.stringify(data)
    localStorage.setItem("data", data);
    this.router.navigate(['/']);
  }
}
