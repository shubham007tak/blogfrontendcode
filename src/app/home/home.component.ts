import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  
  public allBlogs;
    constructor(public blogService:BlogService,public blogHttpService:BlogHttpService) { 

    console.log("home component constructor called")
  }

  ngOnInit() {
    console.log("home component oninit called");
    // this.allBlogs=this.blogService.getAllBlogs();
    // console.log(this.allBlogs);
    this.allBlogs=this.blogHttpService.getAllBlogs().subscribe(

      data =>{
        console.log("logging data");
        console.log("data");
        this.allBlogs=data["data"];
        console.log(this.allBlogs);
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )


  }
  ngOnDestroy() {
    console.log("home component ondestroy called")
  }

}
