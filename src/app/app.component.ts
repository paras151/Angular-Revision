import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CenteredH1Component } from './centered-h1/centered-h1.component';
import { ViewEncapsulation } from '@angular/core';
import { DtbnComponent } from './dtbn/dtbn.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CenteredH1Component, DtbnComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'angular-rev-aniruddha';
  itemVal = "Item property value"

  onReceiveFromDtbn(st: string){
    console.log(st);
  }
}
