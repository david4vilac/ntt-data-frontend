import { Routes } from '@angular/router';
import { ResumenComponent } from '@components/resumen/resumen.component';
import { InformationComponent } from './components/information/information.component';

export const routes: Routes = [
  { path: '', component: InformationComponent },
  { path: 'cliente/:tipoDocumento/:id', component: ResumenComponent },
];
