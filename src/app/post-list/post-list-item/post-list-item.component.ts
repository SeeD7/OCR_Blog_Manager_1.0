import { Component, OnInit, Inject, Input } from '@angular/core';
import { Post } from '../../model/post-model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

   @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  loveIt() {
    this.post.loveIts++;
  }

  dontLoveIt() {
    this.post.loveIts--;
  }
}
