import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../web.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  produto = {title : "", price: 0.0, description: ""};

  constructor(private web : WebService, private router: Router) { }

  cadastrar() {
    this.web.cadastrarProduto(this.produto).subscribe(res => {
      if(res.ok == true) {
        alert("O cadastro foi realizado com sucesso");
        this.router.navigate([""]);
      } else {
        alert("O cadastro não foi realizado!");
      }
    });
  }

  ngOnInit(): void {
  }

}
