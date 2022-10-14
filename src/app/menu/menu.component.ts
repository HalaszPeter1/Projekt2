import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menupontok = [
    {
      title:"Nyitó oldal",
      link: ""
    },
    {
      title: "Termékek",
      link: "termekek"
    },
    {
      title: "Kapcsolat",
      link: "kapcsolat"
    },
    {
      title: "Elérhetőségek",
      link: "elerhetosegek"
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
