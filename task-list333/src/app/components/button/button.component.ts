import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
@Input () color:string="";
@Input () text:string="";
@Output() btnclick= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
  this.btnclick.emit();
  }

}
