import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  baseUrl: string = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/";
  alldata: any;
  hero: any;

  constructor(private httpclient:HttpClient) {
    this.getAll();
  }

  getAll() {
    this.httpclient.get(this.baseUrl + 'all.json').subscribe((data)=>{
      this.alldata = data;
    })
  }

  getHero(id: string) {
    this.httpclient.get(`${this.baseUrl}id/${id}.json`).subscribe((data)=>{
      this.hero = data
      console.log(data);
    })
  }
}

