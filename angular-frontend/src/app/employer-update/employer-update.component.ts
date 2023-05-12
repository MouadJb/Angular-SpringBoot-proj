import { Component, OnInit } from '@angular/core';
import { Employer } from '../employer';
import { EmployerService } from '../employer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employer-update',
  templateUrl: './employer-update.component.html',
  styleUrls: ['./employer-update.component.css']
})
export class EmployerUpdateComponent implements OnInit{

  constructor(private employerService: EmployerService, private route: ActivatedRoute, private router: Router){}
  employer: Employer = new Employer();
  id:number;
  ngOnInit(): void {
    console.log("test1");
    this.id = this.route.snapshot.params['id'];
    console.log("test2");
    this.employerService.trouverEmployer(this.id).subscribe(data => {
      this.employer = data
    }, error => console.log(error));
    console.log("test3");
    throw new Error('Method not implemented.');
  }


  goToEmployer(){
    this.router.navigate(['/employers']);
  }
  
  onSubmit(){
    this.employerService.modifierEmployer(this.id,this.employer).subscribe(data => {
      this.goToEmployer();
    }, error => console.log(error));
  }

}
