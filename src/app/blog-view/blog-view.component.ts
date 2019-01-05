import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from 'ngx-toastr';
import {Location} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers:[Location]
})
export class BlogViewComponent implements OnInit,OnDestroy {
  
  public currentBlog;
  public allBlogs;
  constructor(private _route: ActivatedRoute, private router: Router,public blogService:BlogService,public blogHttpService:BlogHttpService
    ,private toastr:ToastrService,vcr:ViewContainerRef,private location:Location) {
    console.log("blog view constructor is called");
    //this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    console.log("blog view ngOnInitCalled");

    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    // this.currentBlog=this.blogService.getSingleBlogInformation(myBlogId);
    // console.log(this.currentBlog);
    this.allBlogs=this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(

      data =>{
        console.log("logging data");
        console.log(data);
        this.currentBlog=data["data"];
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )

  }

  public deleteThisBlog():any{
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
      data =>{
        console.log(data);
        this.toastr.success('Blog deletes successfully','Success');
        setTimeout(()=>{
          this.router.navigate(['/home']);
        },1000)
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
        this.toastr.error('some error occured','Error');
      }
    )
  }

  public goBackToPreviousPage():any{
    this.location.back();
  }

  ngOnDestroy() {
    console.log("blog view ondestroy is called");
  }
  

}
