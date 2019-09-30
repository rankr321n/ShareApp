import { Component, OnInit } from '@angular/core';
import { DragdropService } from '../dragdrop.service';

@Component({
  selector: 'app-view-files',
  templateUrl: './view-files.component.html',
  styleUrls: ['./view-files.component.css']
})
export class ViewFilesComponent implements OnInit {
video:any
  constructor(private multi:DragdropService) { }

  ngOnInit() {
    this.multi.getUserFiles().subscribe(data=>{
    // console.log(data.users[0].files[0]);
    this.video=data.users[0].files[0]
    console.log(this.video);
    
  })
  }

}
