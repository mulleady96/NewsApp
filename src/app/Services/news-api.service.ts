import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {


  api_key = '78f8ff8c61ea41ce8e9480982db6775d';
  Nasa_apiKey = 'Uz7U7eXOhwJT2rsHaecuobqyAj8OtdDlOqlxJ2h8';

  constructor(private http:HttpClient) {
  }

  initSources(){
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
  }
  initArticles(){ // on app first load - loads articles from TechCrunch
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
  }
  getArticlesByID(source: String){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
  }

  getNasaPicOfDay(){
    return this.http.get('https://api.nasa.gov/planetary/apod?date='+ Date.now() + '&api_key='+this.Nasa_apiKey);
  }



}
