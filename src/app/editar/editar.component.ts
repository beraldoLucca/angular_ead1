import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebService } from '../web.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  produto = {_id : "", title : "", price: 0.0, description: ""};

  constructor(private web : WebService, private rota: ActivatedRoute, private router: Router) { }

  editar() {
    console.log(this.produto._id)
    this.web.editarProduto(this.produto).subscribe(res => {
      
      if(res.ok == true) {
        alert("O produto foi editado com sucesso");
        this.router.navigate([""]);
      } else {
        alert("O produto não foi editado!");
      }
    });
  }

  ngOnInit(): void {
    let param = this.rota.snapshot.paramMap.get("index");
    if(param != null){
      this.web.getProduto(param).subscribe(res => {
        this.produto = res;
      });
      if(this.produto == undefined){
        alert("Esse id não existe");
      }
    }
  }

}
