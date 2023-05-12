import { Component, OnInit } from '@angular/core';
import { Employer } from '../employer';
import { EmployerService } from '../employer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer-create',
  templateUrl: './employer-create.component.html',
  styleUrls: ['./employer-create.component.css']
})
export class EmployerCreateComponent implements OnInit {

  employer: Employer = new Employer();
  
  constructor(private employerService: EmployerService, private router: Router){}
  ngOnInit(): void {

    //throw new Error('Method not implemented.');
  }
  saveEmployer(){
    this.employerService.creerEmployer(this.employer).subscribe( data => {
      console.log(data);
      this.goToEmployer();
    })
  }

  goToEmployer(){
    this.router.navigate(['/employers']);
  }
  onSubmit(){
    this.saveEmployer()
  }

}
