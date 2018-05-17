import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
   title.setTitle('Home Page Title');

    meta.addTags([
      { name: 'author',   content: 'home'},
      { name: 'keywords', content: 'angular seo, angular 4 universal, etc'},
      { name: 'description', content: 'This is my Angular Home!' }
    ]);
}

  ngOnInit() {
  }

}
