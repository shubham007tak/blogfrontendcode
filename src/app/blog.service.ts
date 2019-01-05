import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public allBlogs = [
    {
      "blogId": 1,
      "lastModified": "2017-11-14T14:15:54,407Z",
      "created": "2017-11-14T14:15:54.407Z",
      "tags": ["Humour","standup"],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHTML": "this is the blog body",
      "description": "this is the first blog description",
      "title": "this is the first blog"

    },
    {
      "blogId": 2,
      "lastModified": "2017-11-14T14:15:54,407Z",
      "created": "2017-11-14T14:15:54.407Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHTML": "this is the blog body. this is the blog body.this is the blog body",
      "description": "this is the second blog description",
      "title": "this is the second blog"

    },
    {
      "blogId": 3,
      "lastModified": "2017-11-14T14:15:54,407Z",
      "created": "2017-11-14T14:15:54.407Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHTML": "this is the blog body. this is the blog body.this is the blog body",
      "description": "this is the third blog description",
      "title": "this is the third blog"
    }
  ]


  public currentBlog;

  constructor() { 

    console.log("blog service constructor called");
  } 

//method to return all the blogs
  public getAllBlogs():any{
    return this.allBlogs;
  }

  
// method to get a particular blog
  public getSingleBlogInformation(currentBlogId):any{
    for(let blog of this.allBlogs){
      if(blog.blogId==currentBlogId){
        this.currentBlog=blog;
      }
    }
    
    console.log(this.currentBlog);
    return(this.currentBlog);
  }
 
}
