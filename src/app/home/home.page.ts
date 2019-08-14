
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route:ActivatedRoute, private router:Router) {}

  hotDogLista:Array<Object> = [{

    "titulo" : "Hot Dog Vegetariano",
    "preco" : "R$ 8,00",
    "descricao" : "Hot Dog com uma dedicação aos vegetarianos e veganos, ótima opção de compra com ingredientes de excelente qualidade.",
    "image": "assets/imagem1.jpg"
  },{
    "titulo" : "America Hot Dog",
    "preco" : "R$ 12,00",
    "descricao" : " O Hot Dog é selecionado com os melhores molhos, uma salsicha estendida que o diferencia e dará um toque Americano.",
    "image": "assets/imagem2.jpg"
  },{
    "titulo" : "Hot Dog Fit",
    "preco" : "R$ 6,50",
    "descricao" : "Ótima opção para depois de um treino. Além de saúdavel muito nutrivo e delícioso.",
    "image": "assets/imagem3.jpg"
  }]

  detalhes(titulo, image, preco ){
    this.router.navigate (['/comprar', titulo, image, preco]);

  }

  }

  



