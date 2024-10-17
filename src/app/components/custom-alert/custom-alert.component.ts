import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-alert',
  standalone: true,
  imports: [],
  template: `
    <p class="alert-text">
      {{ mensajeAlerta }}
    </p>
  `,
  styles: [`
    .alert-text {
      color: red;
      font-size: small;
    }
  `]
})
export class CustomAlertComponent {
  @Input() mensajeAlerta = '';
}
