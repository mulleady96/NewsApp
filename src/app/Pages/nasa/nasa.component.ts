import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/Services/news-api.service';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {

  constructor(public newsApi: NewsApiService) {
    // Call the NASA API to load pic of the day.

   }

  ngOnInit() {
    this.newsApi.getNasaPicOfDay();
    console.log(this.newsApi.getNasaPicOfDay())
  }

}
