export interface ICliente {
  idCliente: number;
  primerNombre: string;
  segundoNombre?: string;  // Puedes hacerlo opcional
  primerApellido: string;
  segundoApellido: string;
  ciudad: string;
  direccion: string;
  telefono: string;
  tipoDocumento: string | null;
  documento: string | null;
}

export enum TipoDocumentoIdentidad {
  C = "Cedula de Ciudadania",
  P = "Pasaporte",
}
