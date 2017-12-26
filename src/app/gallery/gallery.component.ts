import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {GalleryService} from "../services/gallery.service";


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  pagePhotos :any;
  pages:Array<number>=[];
  currentPage:number=1;
  sizePerPage:number=10;
  totalPages:number;
  totalPhotos:number;
  keyWord:string='';

  constructor(private galleryService:GalleryService) { }




onSearch(dataForm){
    this.galleryService.search(dataForm.keyWord,this.sizePerPage,this.currentPage)
    .subscribe(data=> {
      this.pagePhotos = data;
      this.totalPages = data.totalHits / this.sizePerPage;
      if (data.totalHits % this.sizePerPage != 0) {
        ++this.totalPages;
      }
      this.pages = new Array(this.totalPages);
    },err=>{
      console.log(err);
  })
}

goToPage(i){
  this.currentPage=i+1;
  this.onSearch({keyWord:this.keyWord});
}

  ngOnInit() {
  }

}
