import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dtbn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dtbn.component.html',
  styleUrl: './dtbn.component.css'
})

export class DtbnComponent {
  @Input()
  item=""

  @Output('upper')
  emitter: EventEmitter<string> = new EventEmitter<string>()
  
  val = "Hi there"

  onOk = ()=>{
    alert("Clicked")
  }

  onUpper = () => {
    alert("On upper called");
    this.emitter.emit("called")
  }
}
