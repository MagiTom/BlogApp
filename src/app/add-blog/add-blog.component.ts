import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotosService } from '../photos.service';
import { PostsService } from '../posts.service';
import { Post } from '../shared/post';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss'],

})
export class AddBlogComponent implements OnInit {

  constructor( public postsService:PostsService, public photosService:PhotosService, public router:Router) { }


  @Input() postsDetails:Post = { title: '', text: '', img: '' };

  imageLoader = true;

  ngOnInit(): void {
    this.fetchPhoto();
  }

  addPost(){
    
    this.postsService.addBlog(this.postsDetails).subscribe((data: {})=>{
      this.router.navigate([''])
    });

    this.postsDetails = { title: '', text: '', img:''}
  }

  fetchPhoto() {
    this.photosService.getPhoto().subscribe(response => {
      this.postsDetails.img = response.urls.regular;
    });
  }

}
