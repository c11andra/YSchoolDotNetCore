import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  school:object;
  constructor(private schoolService:SchoolService) 
  { 
    this.schoolService = schoolService;
  }

  ngOnInit() {
    this.schoolService.getSchool().subscribe(
      s=>this.school=s
      );
  }

}
