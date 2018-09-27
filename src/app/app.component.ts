import { Component } from '@angular/core';
import { Post } from './model/post-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Post[] = [new Post('Pourquoi il est si important de développer son «écologie intérieure»',
   'NOS CONSEILS PSYCHOLOGIE - Le psychiatre Christophe André détaille dans Le Figaro les bienfaits du travail sur soi.'),
   new Post('Opéra de Paris : le changement, c\'est maintenant?',
   'Dirigée pendant sept ans par Stéphane Lissner, l\'institution a un besoin urgent d\'être réformée. Première étape,' +
   ' lui trouver un remplaçant pour 2021.'),
   new Post(' Un rapport parlementaire préconise des mesures contre la malbouffe',
   ' Le rapport sur l\'alimentation industrielle proposée ce mercredi à l\'Assemblée nationale préconise notamment ' +
   'l\'amélioration de la qualité des repas dans les cantines, et une forte diminution du nombre d\'additifs autorisés ' +
   'dans les produits industriels.')
  ];

  constructor() {
  }
}
