import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  imageWidth =180;
  imageHeight=210;

  tshirtdetails: any;
  showDetails: boolean=false;
  buyButton: boolean=false;
  tshirts: any=[];
  
  addtocart(t): void{
    this.tshirtdetails= t;
    this.showDetails=true;
    this.buyButton=true;
  }

  cancel(d):void{
    this.showDetails=false;
    this.buyButton=false;
  }

  update(d): void{
    console.log(d.TshirtId);
    this.showDetails=false;
    this.buyButton=false;
  }

  ngOnInit(): void{
    this.tshirts= this.getTshirts();
    console.log(this.tshirts);
  }

  

  getTshirts() {
    return  [
      {
        "TshirtId": 1,
        "TshirtName": "Quantum Suit",
        "description": "Avengers Quantum Suits From Endgame",
        "price": 5000,
        "quantity": 30,
        "color": 'White',
        "imageUrlFront": "https://i.ibb.co/FX2T4Zg/Img1-Front.png",
        "imageUrlBack": "https://i.ibb.co/nLLyWCp/Img1Back.png",
        "imageUrlFrontLocal": "assets/images/Img1Front.PNG",
        "imageUrlBackLocal": "assets/images/Img1Back.PNG",
        "imageSrc": ''
      },

      {
        "TshirtId": 2,
        "TshirtName": "Grey T-Shirt",
        "description": "Designer Select T-Shirt",
        "price": 995,
        "quantity": 23,
        "color": 'Ligth Grey',
        "imageUrlFront": "https://i.ibb.co/k8K0XCq/Img2-Front.png",
        "imageUrlBack": "https://i.ibb.co/k5rjVrB/Img2Back.png",
        "imageUrlFrontLocal": "assets/images/Img2Front.PNG",
        "imageUrlBackLocal": "assets/images/Img2Back.PNG",
        "imageSrc": ''
      },

      {
        "TshirtId": 3,
        "TshirtName": "LETHEL Black",
        "description": "LETHEL T-Shirt from logo Designer",
        "price": 1500,
        "quantity": 13,
        "color": 'Mate Black',
        "imageUrlFront": "https://i.ibb.co/C1phg0B/Img3-Front.png",
        "imageUrlBack": "https://i.ibb.co/P63TsnK/Img3Back.png",
        "imageUrlFrontLocal": "assets/images/Img3Front.PNG",
        "imageUrlBackLocal": "assets/images/Img3Back.PNG",
        "imageSrc": ''
      },

      {
        "TshirtId": 4,
        "TshirtName": "Cool Mom",
        "description": "Strong Mother Strong Child",
        "price": 500,
        "quantity": 100,
        "color": 'Magenta',
        "imageUrlFront": "https://i.ibb.co/ch14F5q/Img4-Front.png",
        "imageUrlBack": "https://i.ibb.co/cg91kjc/Img4Back.png",
        "imageUrlFrontLocal": "assets/images/Img4Front.PNG",
        "imageUrlBackLocal": "assets/images/Img4Back.PNG",
        "imageSrc": ''
      },

      {
        "TshirtId": 5,
        "TshirtName": "Johnny Kill",
        "description": "The game character Johnny Kill",
        "price": 1995,
        "quantity": 50,
        "color": 'Black & Yello',
        "imageUrlFront": "https://i.ibb.co/mqhbps1/Img5-Front.png",
        "imageUrlBack": "https://i.ibb.co/ctz22Xr/Img5Back.png",
        "imageUrlFrontLocal": "assets/images/Img5Front.PNG",
        "imageUrlBackLocal": "assets/images/Img5Back.PNG",
        "imageSrc": ''
      },

      {
        "TshirtId": 6,
        "TshirtName": "Lions Club",
        "description": "Avengers Quantum Suits From Avengers-Endgame",
        "price": 500,
        "quantity": 90,
        "color": 'White',
        "imageUrlFront": "https://i.ibb.co/BqqB3Ny/Img6-Front.png",
        "imageUrlBack": "https://i.ibb.co/F8xB6tS/Img6Back.png",
        "imageUrlFrontLocal": "assets/images/Img6Front.PNG",
        "imageUrlBackLocal": "assets/images/Img6Back.PNG",
        "imageSrc": ''
      }
    ]
  }
}
