import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class GalleryService{

  constructor(private http:Http){

  }

  search(keyWord:string, sizePerPage:number , page:number){
    return this.http.get("https://pixabay.com/api/?key=7510112-7f3c76af051db26f5bac822d3&q="
      +keyWord+"&per_page="+sizePerPage+"&page="+page)
      .map(resp=>resp.json())

    //https://pixabay.com/api/?key=7510112-7f3c76af051db26f5bac822d3&response_group=high_resolution&q=yellow+flower&pretty=true
  }


}

