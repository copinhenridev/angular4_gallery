import { Component, OnInit } from '@angular/core';
import {AboutService} from "../services/about.service";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  info:{nom:string,email:string,tel:string};
  comments=[];
  commentaire = {message:"", date:null};

  constructor(private aboutService:AboutService) {
    this.info = this.aboutService.getInfo();
    this.comments = this.aboutService.getAllComments()
  }

  onAddCommentaire(c){
    console.log(c);
    this.aboutService.addComment(c);
    this.commentaire.message="";
  }


  ngOnInit() {
  }

}
