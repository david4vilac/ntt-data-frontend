import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ICliente  } from '@src/app/models/cliente/cliente.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotFountComponent } from '../not-fount/not-fount.component';
import { ClienteService } from '@services/cliente.service';

@Component({
  selector: 'app-resumen',
  standalone: true,
  imports: [ReactiveFormsModule, NotFountComponent],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css'
})
export class ResumenComponent  implements OnInit {

  cliente: any
  clienteForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.clienteForm = this.fb.group({
    primerNombre: [{ value: '', disabled: true }],
    segundoNombre: [{ value: '', disabled: true }],
    primerApellido: [{ value: '', disabled: true }]
  });}


  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    const tipoDocumento = this.activatedRoute.snapshot.params['tipoDocumento'];
    this.clienteService.listarPorId(id, tipoDocumento).subscribe(
      response => {
        this.cliente = response.data;
        // Usa patchValue para actualizar los campos del formulario
        this.clienteForm.patchValue({
          primerNombre: this.cliente.primerNombre,
          segundoNombre: this.cliente.segundoNombre,
          primerApellido: this.cliente.primerApellido
        });
        this.toastr.success(response.mensaje, 'Exito!', {
          timeOut: 2000,
          positionClass: 'toast-bottom-right',
        });

      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error !', {
          timeOut: 3000,
          positionClass: 'toast-bottom-right',
        });
      }
    );
  }


  volver(): void {
    this.router.navigate(['/'], { replaceUrl: true });
  }
}
