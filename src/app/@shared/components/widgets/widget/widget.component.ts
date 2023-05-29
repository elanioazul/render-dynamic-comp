import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent {
  @Input() configOptions: {
    [key: string]: string;
  } = {};
  @Output() messageEvent = new EventEmitter<string>()

  constructor() {
  }

  ngOnInit() {
  }

  sendMessageToLoaderComp(): void {
    this.messageEvent.emit('mensaje por aqui al comp cargador de mi')
  }
}
