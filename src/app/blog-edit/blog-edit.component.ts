import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TimeoutError } from 'rxjs';
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





// import { create } from 'domain';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {


  constructor(public blogHttpService: BlogHttpService,private _route:ActivatedRoute,private router:Router,vcr:ViewContainerRef,private toastr: ToastrService) {
    //this.toastr.setRootViewContainerRef(vcr);
  }
  // public blogTitle: string;
  // public blogBodyHtml: string;
  // public blogDescription: string;
  // public blogCategory: string;
  public currentBlog;
  public possibleCategories = ["Comedy", "Drama", "Action", "Technology"];

  ngOnInit() {
    console.log("blog edit ngOnInitCalled");
    let myBlogId=this._route.snapshot.paramMap.get('blogId');
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data =>{
        console.log(data);
        this.currentBlog=data["data"];
        console.log("current blog is");
        console.log(this.currentBlog);

      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
  }

  public editThisBlog(): any {
   
    this.blogHttpService.editBlog(this.currentBlog.blogId,this.currentBlog).subscribe(
      data => {
        
        console.log(data);
        // alert("blog posted successfully");
        this.toastr.success('Blog Posted successfully', 'Success!');
        setTimeout(()=>{  
          this.router.navigate(['/blog',this.currentBlog.blogId]);
        }, 1000)
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        // alert("some error occured");
        this.toastr.error('some error occured','Error');
      }
    )
  }


}

