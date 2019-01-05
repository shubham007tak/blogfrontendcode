import { Injectable } from '@angular/core';
//importing http client to make the requests  
import {HttpClient,HttpErrorResponse} from '@angular/common/http';

//import observable related code
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public allBlogs;
  public currentBlog;
  public authToken='NTMzMDYyNzRhY2FiMGIzZjViOTlhMDBiOWY1NWQyYmYxNjJhYWNlZTllZjBlODYzMGU0YmY3NDMxYjgyOWY2MDI2ZDAwNjI4MjY5MzI4YzAyNjIwODJkNTE0ZGI4MWI4NzU4ZDgwOTRhMWY5YzZkYTAyMzc2YjczMGM3MTUxNzFhMA==';
  public baseUrl='https://blogapp.edwisor.com/api/v1/blogs';

  constructor(private _http:HttpClient) {
    console.log("blog-http service was called"); 

  }

  private handleError(err:HttpErrorResponse){
    console.log("handle error Http calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }

  public getAllBlogs():any{
    
    let myResponse=this._http.get(this.baseUrl+'/all?authToken='+this.authToken);
    console.log(myResponse);
    return myResponse;
  }

  
// method to get a particular blog
  public getSingleBlogInformation(currentBlogId):any{
    
    let myResponse=this._http.get(this.baseUrl+'/view'+'/'+currentBlogId+'?authToken='+this.authToken);
    return myResponse;
  }

  public createBlog(blogData):any{
    let myResponse=this._http.post(this.baseUrl+'/create'+'?authToken='+this.authToken,blogData);
    return myResponse;
  }
  
  public deleteBlog(blogId): any {

    let data = {}
    let myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authToken, data)
    return myResponse;

  }// end delete blog

  public editBlog(blogId,blogData): any {

    
    let myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.authToken, blogData)
    return myResponse;

  }
}
