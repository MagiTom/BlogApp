import { Component, OnInit} from '@angular/core';
import { PostsService } from '../posts.service';
import { SearchService } from '../shared/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  photoUrl: string;
  searchText;
  
  constructor(public postService:PostsService, public searchService:SearchService) { }

  blogs = [];
  data;
  search:boolean;

  ngOnInit(): void {
  this.loadPosts();
  
  }

  loadPosts(){
    return this.postService.getBlogs().subscribe((data: {}) => {
      this.data = data;
      this.blogs.push(this.data);
      this.blogs[0].reverse();
    })
  }

  deletePost(id:number){
    if (window.confirm('Are you sure, you want to delete?')){
      this.postService.deleteBlog(id).subscribe(data => {
        this.loadPosts();
        window.location.reload();
      })
    }
  }

}
