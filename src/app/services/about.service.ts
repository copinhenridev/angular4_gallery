import {Injectable} from "@angular/core";

@Injectable()
export class AboutService{

  info={
    nom: 'David',
    email: 'david@vladene.com',
    tel: '690303851'

  };

  comments=[
    {date: new Date() , message:'A'},
    {date: new Date() , message:'B'},
    {date: new Date() , message:'C'}

  ];
  constructor(){}

  addComment(c){
    c.date = new Date();
    this.comments.push(c);
  }

  getAllComments(){
    return this.comments;
  }

  getInfo(){

    return this.info;
  }

}


