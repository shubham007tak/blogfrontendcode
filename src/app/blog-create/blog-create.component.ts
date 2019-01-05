import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TimeoutError } from 'rxjs';
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';






// import { create } from 'domain';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {


  constructor(public blogHttpService: BlogHttpService,private _route:ActivatedRoute,private router:Router,vcr:ViewContainerRef,private toastr: ToastrService) {
    //this.toastr.setRootViewContainerRef(vcr);
  }
  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories = ["Comedy", "Drama", "Action", "Technology"];

  ngOnInit() {
    console.log("blog view ngOnInitCalled");
  }

  public createBlog(): any {
    let blogData = {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory
    }
    console.log(blogData);
    this.blogHttpService.createBlog(blogData).subscribe(
      data => {
        console.log("blog created");
        console.log(blogData);
        // alert("blog posted successfully");
        this.toastr.success('Blog Posted successfully', 'Success!');
        setTimeout(()=>{  
          this.router.navigate(['/blog',data.data.blogId]);
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
