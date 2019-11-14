import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {
  student: any;
  constructor(private http: HttpService, private route: Router) { }

  ngOnInit() {
    this.student = {
      name: "",
      age: "",
      rating: "",
      beltsReceived: []
    }
  }

  onFormSubmit(event){
    let obs = this.http.editStudent(event);
    obs.subscribe(data => {
      this.route.navigate(['/home'])
    }, err => {
      return;
    })
    
  }

}
