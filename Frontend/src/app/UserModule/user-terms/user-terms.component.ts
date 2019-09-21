import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-terms',
  templateUrl: './user-terms.component.html',
  styleUrls: ['./user-terms.component.css']
})
export class UserTermsComponent implements OnInit {
terms:any
  constructor(private serv:UserService) { }

  ngOnInit() {
    this.serv.getTerms().subscribe(data=>{
this.terms=data.terms
    })
  }

}
