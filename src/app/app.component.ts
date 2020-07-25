import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Podcast del RDU';

  socAccMain = [
    'MUnitedES',
    'Sp_ManUtd',
    'ManUtdLa'
  ];

  socAccSec = [
    'ManUnitedMaster',
    'MUFC_Peru',
    'ManUtdMX'
  ];
}
