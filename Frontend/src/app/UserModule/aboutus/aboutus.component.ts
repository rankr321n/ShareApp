import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
aboutus:any
  constructor(private serv:UserService) { }

  ngOnInit() { 
     this.serv.getTerms().subscribe(data=>{
    this.aboutus=data.aboutus
        })
  }

}
