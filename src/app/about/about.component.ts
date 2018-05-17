import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meta, Title } from "@angular/platform-browser";
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
	dogs: any;
  constructor(private http: HttpClient, meta: Meta, title: Title) {
   title.setTitle('About Page Title');

    meta.addTags([
      { name: 'author',   content: 'about'},
      { name: 'keywords', content: 'angular seo, angular 4 universal, etc'},
      { name: 'description', content: 'This is my Angular About!' }
    ]);
  }

  ngOnInit() {
  	this.http
      .get('https://dog.ceo/api/breeds/list/all')
      .subscribe(data => {
        console.log(data);
        this.dogs = data['message']['terrier'];
      });
  }

}
