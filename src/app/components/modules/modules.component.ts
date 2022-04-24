import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

  sections: any[] = [
    {
      "id": "1",
      "name": "Section 1 - Nom section"
    },
    {
      "id": "2",
      "name": "Section 2 - Nom section"
    }
  ];


  modules_names: any[] = [
    {
      "id": "1",
      "section_id": "1",
      "name": "Java",
      "bg_img": "" 
    },
    {
      "id": "2",
      "section_id": "1",
      "name": "Français",
      "bg_img": ""
    },
    {
      "id": "3",
      "section_id": "1",
      "name": "Maths",
      "bg_img": ""
    },
    {
      "id": "4",
      "section_id": "2",
      "name": "Physique-Chimie",
      "bg_img": ""
    },
    {
      "id": "5",
      "section_id": "2",
      "name": "Course relais",
      "bg_img": ""
    },
    {
      "id": "6",
      "section_id": "2",
      "name": "Intelligence Artificielle",
      "bg_img": ""
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }
}
