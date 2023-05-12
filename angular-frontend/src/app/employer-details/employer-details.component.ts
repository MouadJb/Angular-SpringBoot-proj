import { Component, OnInit } from '@angular/core';
import { Employer } from '../employer';
import { ActivatedRoute } from '@angular/router';
import { EmployerService } from '../employer.service';

@Component({
  selector: 'app-employer-details',
  templateUrl: './employer-details.component.html',
  styleUrls: ['./employer-details.component.css']
})
export class EmployerDetailsComponent implements OnInit{
  id:number
  employer: Employer
  constructor(private route: ActivatedRoute, private employerService: EmployerService){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employer = new Employer();
    this.employerService.trouverEmployer(this.id).subscribe(data =>{
      this.employer = data;
    })
    throw new Error('Method not implemented.');
  }

}
