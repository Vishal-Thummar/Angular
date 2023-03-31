import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data : any 
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.data = localStorage.getItem('data');
    this.data = JSON.parse(this.data);
    console.log(this.data);
  }

 
}
