import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotosService } from '../photos.service';
import { PostsService } from '../posts.service';
import { Post } from '../shared/post';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  postData: any = {};

  constructor(public postService:PostsService, public actRoute: ActivatedRoute, public router: Router, public photosService:PhotosService ) { }

  ngOnInit(): void {
    this.postService.getBlog(this.id).subscribe((data: {}) => {
      this.postData = data;
  })
}
  
  editPost(postInfo:Post){
    if(window.confirm('Are you sure, you want to update?')){
      this.postService.updateBlog(this.id, postInfo).subscribe(data => {
        this.router.navigate([''])
      })
    }
  }

  fetchPhoto() {
    this.photosService.getPhoto().subscribe(response => {
      this.postData.img = response.urls.regular;
    });
  }
}
