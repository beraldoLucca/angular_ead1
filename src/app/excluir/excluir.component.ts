import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../Produto';
import { WebService } from '../web.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit {

  produto: Produto;

  constructor(private web : WebService, private rota: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let param = this.rota.snapshot.paramMap.get("index");
    if(param != null){
      this.web.excluirProduto(param).subscribe(res => {
        console.log(res.msg)
        if(res.msg == "Produto deletado com sucesso") {
          alert("O produto foi excluido com sucesso");
        } else {
          alert("Id inexistente!");
        }
        this.router.navigate([""]);
      });
    }
  }

}
