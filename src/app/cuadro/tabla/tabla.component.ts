import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  
  producto!:any;

  constructor(){}
   listas:any[]=[
    {
      "id":1,
      "codigo":1,
      "descripcion":"Galletas chokis",
      "precio_compra":10.00,
      "precio_venta":15.00,
      "ganancia":5,
      "existencia":100.00,
    },
    {
      "id":2,
      "codigo":2,
      "descripcion":"Mermelada de fresa",
      "precio_compra":65.00,
      "precio_venta":80.00,
      "ganancia":15,
      "existencia":100.00,
    },
    {
      "id":3,
      "codigo":3,
      "descripcion":"Aceite",
      "precio_compra":18.00,
      "precio_venta":20.00,
      "ganancia":2,
      "existencia":100.00,
    },
    {
      "id":4,
      "codigo":4,
      "descripcion":"Palomitas de maiz",
      "precio_compra":12.00,
      "precio_venta":15.00,
      "ganancia":3,
      "existencia":100.00,
    },
    {
      "id":5,
      "codigo":5,
      "descripcion":"Doritos",
      "precio_compra":5.00,
      "precio_venta":8.00,
      "ganancia":3,
      "existencia":100.00,
    },
   ]
 
  ngOnInit(): void {
    
  }
  editar(id:number){
    const objeto = this.listas.find((item) => item.id === id);
    console.log(objeto);
    this.producto=objeto;

  }
   enviar(producto:any){
    this.listas.map(produc=>{
      if(produc.id==producto.id){
       Object.assign(produc,producto)
        return produc;
      }else{
        return produc;
      }
    })
   }

  
}
