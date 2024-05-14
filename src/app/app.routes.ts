import { Routes } from '@angular/router';
import { GeneratorComponent } from './generator/generator.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: 'crisis-list', component: GeneratorComponent},
    {path: 'heroes-list', component: ToolbarComponent},
    {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];
