import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.page.html',
  styleUrls: ['./comprar.page.scss'],
})
export class ComprarPage implements OnInit {

  constructor(private alert:AlertController, private nav:NavController) { }

  ngOnInit() {}

  buscar(cep) {
    const cepString = cep.el.value

    if (cepString=== '' || cepString.length !== 8 || !cepString.match(/^\d+$/g)){
      console.log("CEP Inválido")
    } else  {
      console.log("CEP Válido")
      let retorno = fetch('https://viacep.com.br/ws/' + cepString + '/json')
      console.log("Enviando requisição...")
      retorno.then(dados => {
       return dados.json()
      }).then(endereco => {
       if (endereco.erro){
         console.error ('CEP Inexistente.')
       } else {
        console.log (endereco)
        this.alert.create({
          header: 'Seu endereço está correto?',
          subHeader: ` ${endereco.logradouro}, ${endereco.bairro}, ${endereco.localidade} - ${endereco.uf.toUpperCase()}` ,
          buttons: [{
            text: 'Não'
          }, {
            text: 'Sim', 
            handler: () => {
              this.alert.dismiss()
              this.alert.create({
                header: 'Qual o número?',
                inputs: [{
                  name: 'numero',
                  type: 'number'
                }],
                buttons: [{
                  text: 'Cancelar'
                },{
                  text: 'Salvar', 
                  handler: (dados)=>{
                    let tempEnd = new Compra()
                    tempEnd.bairro = endereco.bairro
                    tempEnd.cidade = endereco.localidade
                    tempEnd.estado = endereco.uf
                    tempEnd.numero = dados.numero
                    tempEnd.rua = endereco.logradouro
                    tempEnd.cep = endereco. cep
                    tempEnd.salvar()
                    this.nav.back()
                  }
                }]
              }).then (alert => {
                alert.present()
              })
            }
          }]
        }).then(alert => {
          alert.present()
        })
       }
      })

    } 

    
  }
}
