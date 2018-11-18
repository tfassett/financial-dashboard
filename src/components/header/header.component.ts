import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private menuItemsArray: any[] = [ 
    {"title":"Home","link":"#"},
    {"title":"About","link":"#"},
    {"title":"Contact","link":"#",
    "subItems":[
                {"title":"LinkedIn","link":"#"},
                {"title":"Phone","link":"#"},
               ]
    },
];
  constructor() { }

  ngOnInit() {
  }

  
}
