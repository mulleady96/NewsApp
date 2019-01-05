import { Component } from '@angular/core';
import { NewsApiService } from './Services/news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  mArticles: Array<any>;
  mSources: Array<any>;
  Apod: any;

 constructor(private newsapi:NewsApiService){
   console.log('app component constructor called');
 }

 ngOnInit() {
       //load articles
     this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
   //load news sources
   this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);

   // Load NASA PIC of The Day
   this.newsapi.getNasaPicOfDay().subscribe(data => this.Apod = data);
   }


 searchArticles(source){
   console.log("selected source is: "+source);
   this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
 }


}
