import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
// tslint:disable-next-line: max-line-length
    new Recipe('A Test Recipe', 'This is just a test', 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg'),
    new Recipe('Second Recipe', 'I am the second test Recipe', 'https://static01.nyt.com/images/2016/05/03/dining/03COOKING-PASTAWITHBUTTER2/03COOKING-PASTAWITHBUTTER2-videoSixteenByNineJumbo1600.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
