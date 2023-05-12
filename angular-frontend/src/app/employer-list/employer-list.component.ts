import { Component, OnInit } from '@angular/core';
import { Employer } from '../employer';
import { EmployerService } from '../employer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employer-list',
  templateUrl: './employer-list.component.html',
  styleUrls: ['./employer-list.component.css']
})
export class EmployerListComponent implements OnInit {

  employers: Employer[];

  constructor(private employerService: EmployerService, private router: Router){}

  ngOnInit(): void {
    this.getEmployers();
    console.log(this.employers)
    //this.employers = [{
    //  "id":1,
    //  "nom": "test",
    //  "prenom": "test",
    //  "emailId": "test@mail.com"
    //}]
  }

  private getEmployers(){ 
    this.employerService.getEmployersList().subscribe(data => {
      this.employers = data;
      //console.log(data);
    }
    );
  }
  updateEmployer(id: number){
    this.router.navigate(['employer-update/',id]);
  }

  suppEmployer(id: number){
    this.employerService.supprimerEmployer(id).subscribe(data => {
      this.getEmployers();
    })
  }
  detEmployer(id: number){
    this.router.navigate(['employer-details/',id]);
  }
  

}
