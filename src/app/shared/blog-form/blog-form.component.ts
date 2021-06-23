import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import {Post} from '../post';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {


@Input() modelTitle:string;
@Input() modelText:string;
@Input() modelImg:string;
@Input() color:string;

postInfo:Post;

@Output() submitPost = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  postEvent(){
    this.postInfo = {
      title: this.modelTitle,
      text: this.modelText,
      img: this.modelImg
    }
    this.submitPost.emit(this.postInfo);
  }

  cancel(){
   if(window.confirm('Are sure you want to cancel this post?')){
    this.router.navigate(['/'])
   } 
  }

}
