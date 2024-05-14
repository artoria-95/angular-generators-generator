import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GeneratorComponent } from "./generator/generator.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, GeneratorComponent, ToolbarComponent]
})
export class AppComponent {
  title = 'angular-generators-generator';
}
