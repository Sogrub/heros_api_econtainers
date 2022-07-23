import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/servicios/main-service.service';


@Component({
  selector: 'app-body-details',
  templateUrl: './body-details.component.html',
  styleUrls: ['./body-details.component.scss']
})
export class BodyDetailsComponent implements OnInit {
  //Atributos

  info: any;

  constructor(private main: MainServiceService) {
    setTimeout(() => {
      this.info = main.hero;
    }, 1000);
  }

  ngOnInit(): void {
  }

}
