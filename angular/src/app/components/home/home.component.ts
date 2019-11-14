import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allStudents: any;
  studentToEdit: any;
  studentToRate: any;
  
  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.getAllStudents();
  }

  getAllStudents(){
    let obs = this.httpService.getStudents()
    obs.subscribe((data:any) => {
      this.allStudents = data.results;
    })
  }

  addNewPlaya(){

  }

  rateThisFool(student){
    this.studentToRate = student;
  }

  rateFool(event){
    let obs = this.httpService.rateStudentAbility(event._id, event);
    obs.subscribe(data => {
      this.studentToRate = null;
    })
  }

  editThisSucka(student){
    this.studentToEdit = {
      _id: student._id,
      name: student.name,
      age: student.age,
      rating: student.rating,
      beltsReceived: student.beltsReceived
    }
  }

  editSucka(event){
    let obs = this.httpService.editStudent(event)
    obs.subscribe(data => {
      this.getAllStudents();
    })
  }

  giveThisHomieABelt(student){

  }
}
