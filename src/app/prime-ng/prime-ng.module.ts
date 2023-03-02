import { NgModule } from '@angular/core';

//PrimeNG
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';


@NgModule({
  declarations: [],
  //Se pone en el exports porque el modulo va a servir para exportar las importaciones del primeng que se realicen
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    TableModule,
    ToolbarModule
  ]
})
export class PrimeNgModule { }
