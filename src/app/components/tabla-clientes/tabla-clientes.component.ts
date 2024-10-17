import { Component, OnInit } from '@angular/core';
import { ClienteService } from '@services/cliente.service';
import { ICliente, TipoDocumentoIdentidad } from '@src/app/models/cliente/cliente.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tabla-clientes',
  standalone: true,
  imports: [],
  templateUrl: './tabla-clientes.component.html',
  styleUrl: './tabla-clientes.component.css'
})
export class TablaClientesComponent implements OnInit {

  listaClientes: ICliente[] = [];
  tipoDocumentoIdentidad: any = TipoDocumentoIdentidad;

  constructor(
    private clienteService: ClienteService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {

    this.clienteService.getAllClients().subscribe(
      response => {
        this.listaClientes = Array.isArray(response.data) ? response.data : response.data ? [response.data] : [];
        const toast = this.toastr.success(response.mensaje, 'Éxito!', {
          positionClass: 'toast-bottom-right',
        });

        setTimeout(() => {
          this.toastr.clear(toast.toastId);
        }, 2000);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error !', {
          timeOut: 3000,
          positionClass: 'toast-bottom-right',
        });
      }
    );
  }

}
