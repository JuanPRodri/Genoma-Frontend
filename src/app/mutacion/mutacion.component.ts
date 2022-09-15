import { Component, OnInit } from '@angular/core';
import { MutacionService } from './mutacion.service';
import { AnalisisDto } from './dto/analisisDto';
import { Mutacion } from './mutacion';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mutacion',
  templateUrl: './mutacion.component.html',
  styleUrls: ['./mutacion.component.css']
})
export class MutacionComponent implements OnInit {


  analizar: AnalisisDto = {
    cadenaAdn:""
  };

  public form: FormGroup = this.formBuider.group({
    cadenaAdn :['']
  });

  
  constructor(private mutacionService: MutacionService, private formBuider:FormBuilder) { }

  ngOnInit(): void {

  }

  send(): any {
    this.analizar.cadenaAdn = this.form.value.cadenaAdn;

    this.mutacionService.evaluarAdn(this.analizar).subscribe((data: Mutacion) =>{
      console.log(data);

      
    });


  }


}
