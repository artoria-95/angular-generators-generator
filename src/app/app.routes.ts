import { Routes } from '@angular/router';
import { GeneratorComponent } from './generator/generator.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

export const routes: Routes = [
    {path: 'crisis-list', component: GeneratorComponent},
    {path: 'heroes-list', component: ToolbarComponent},
    {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
];
