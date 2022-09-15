import { Component, OnInit } from '@angular/core';
import { Analisis } from './analisis';
import { AnalisisService } from './analisis.service';


@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.css']
})
export class AnalisisComponent implements OnInit {

  allAnalisis: Analisis[] = [];
  constructor(private analisisService: AnalisisService) { }

  ngOnInit(): void {
    this.analisisService.getAnalisis().subscribe((data: Analisis[]) => {
      this.allAnalisis = data;
    });

  }

   load(): void{
    this.ngOnInit();
  }

}
