import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dtbn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dtbn.component.html',
  styleUrl: './dtbn.component.css'
})
export class DtbnComponent {
  val = "Hi there"

  onOk = ()=>{
    alert("Clicked")
  }
}
