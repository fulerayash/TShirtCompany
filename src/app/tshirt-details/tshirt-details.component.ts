import { EventEmitter, Component, OnInit, Input, OnChanges, Output } from '@angular/core';
;


@Component({
  selector: 'app-tshirt-details',
  templateUrl: './tshirt-details.component.html',
  styleUrls: ['./tshirt-details.component.css']
})
export class TShirtDetailsComponent implements OnInit, OnChanges {
  
  
  @Input() tshirt ; 
  quantityLocal; 
  error = false; 
  @Output() cancelevent = new EventEmitter();
  @Output() buyevent = new EventEmitter();
  ngOnChanges(): void {


  }
  buy(){
    
    if(this.quantityLocal){
      if(this.quantityLocal > this.tshirt.quantity){
        alert("not avaiable");
      }
      else{
        this.tshirt.quantity = this.tshirt.quantity - this.quantityLocal;
        this.buyevent.emit(this.tshirt);
      }
    }
    
  }
  cancel(){
    this.cancelevent.emit(false);
  }

  ngOnInit(): void {
    console.log("init");
  }

}
