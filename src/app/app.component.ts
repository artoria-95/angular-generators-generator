import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GeneratorComponent } from "./generator/generator.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, GeneratorComponent, ToolbarComponent, RouterLink, RouterLinkActive]
})
export class AppComponent {
  title = 'angular-generators-generator';
}
