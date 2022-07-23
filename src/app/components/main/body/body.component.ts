import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainServiceService } from 'src/app/servicios/main-service.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  //atributos
  heroes20: any[] = [];
  serch: string = "";

  constructor(private main_service: MainServiceService, private route: Router) { }

  ngOnInit(): void {
    this.main_service.getAll();
    setTimeout(() => {
      this.get20heroes();
      console.log(this.heroes20);

    }, 1000);
  }

  get20heroes() {
    let allheroes = this.main_service.alldata
    for (let i = 0; i < 20; i++) {
      this.heroes20.push(allheroes[i]);
    }
  }

  buscar() {
  let lista = [... this.main_service.alldata]
  let buscar = this.serch.toLowerCase();
    this.heroes20 = lista.filter((item) => {
      let nombre = item.name.toLowerCase();
      return nombre.includes(buscar);
    });
  }

  goHero(id: string){
    this.main_service.getHero(id);
    console.log(id);
    this.route.navigate(['/details']);
  }
}
