import { Component, signal } from '@angular/core';
import {articles} from './articles'
import {HttpClient, HttpClientModule} from '@angular/common/http'

@Component({
  selector: 'read-robin-feed',
  templateUrl: 'feed.page.html',
  styleUrls: ['feed.page.scss'],
})
export class FeedPage {

  selectedArticle = signal<string>('')
  articlesList = articles.slice(0, 10)

  constructor(private http: HttpClient) {}

  selectArticle(url: string){
    this.selectedArticle.set(url)
    this.http.get(`http://localhost:3000/summarize?url=${encodeURIComponent(this.selectedArticle())}`).subscribe((result)=>{
      console.log(result)
    })
  }

}
