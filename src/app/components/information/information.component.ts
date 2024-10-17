import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TipoDocumentoIdentidad } from '@models/cliente/cliente.model';
import { maxLengthNumberValidator, minLengthNumberValidator } from '@utils/custom-validators'; // Asegúrate de que la ruta sea correcta
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { Router } from '@angular/router';
import { CustomAlertComponent } from '../custom-alert/custom-alert.component';
import { TablaClientesComponent } from '../tabla-clientes/tabla-clientes.component';

@Component({
  selector: 'ntt-information',
  standalone: true,
  imports: [ReactiveFormsModule, NgxMaskDirective, NgxMaskPipe, CustomAlertComponent, TablaClientesComponent],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent implements OnInit {
  contactForm!: FormGroup;
  tipoDocumentoIdentidad: any = TipoDocumentoIdentidad;

  constructor(private readonly fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }


  onSubmit(): void {
    this.router.navigate([`/cliente/${this.contactForm.value.tipoDocumento}/${this.contactForm.value.numeroDocumento}`]);
  }

  // Método para obtener los valores del enum
  getEnumKeys(): string[] {
    return Object.keys(this.tipoDocumentoIdentidad);
  }


  initForm(): FormGroup {
    return this.fb.group({
      numeroDocumento: ['',
        [
          minLengthNumberValidator(8),
          maxLengthNumberValidator(11),
          Validators.required
        ]
      ],
      tipoDocumento: ['', [Validators.required]],
    })
  }
}
