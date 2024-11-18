import { Routes } from '@angular/router';
import { BioComponent } from './bio/bio.component'
import { WorkComponent } from './work/work.component'

export const routes: Routes = [
    {
        path: '',
        component: BioComponent
    }, 
    {
        path: 'work',
        component: WorkComponent
    }
];
