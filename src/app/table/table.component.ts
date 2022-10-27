import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
@Output() op = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  title = 'assessment';
  list: any[]=[{
    name:"Ab",
    age:29},
            {name:"Bc",age:10}
            ,{name:"Cd",  age:15},
            {name:"De",age:20},
            {name:"Ef",age:25},
            {name:"Fg",age:26},
            {name:"Gh",age:31},
            {name:"Hi",age:36},
            {name:"Ij", age:30}
            ,{name:"Jk",age:25,}];
  #ip: any;

 public editValue(i:any){
  // this.list[i].isEditable=""
  var doc:any =document.getElementsByClassName('new'+i);
  for(let j of doc){
  j.removeAttribute("readonly");
  j.removeAttribute("hidden");
  
}
  
  

 }
  public submit(i:any){
    console.log(1);
    var button:any = document.getElementById(i);
    button.hidden = true;
    var name:any = (document.getElementById("name")as HTMLInputElement).value;
    var age:any=(document.getElementById("age")as HTMLInputElement).value;
    console.log(this.list[i].name)
    this.list[i].name=name;
    console.log(this.list[i].name)

    this.list[i].age=age;
    
  }
}
