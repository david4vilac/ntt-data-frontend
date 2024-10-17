import { ICliente } from "./cliente.model";

export interface IResponse {
  status: number;
  mensaje: string;
  data: ICliente[] | ICliente;
}
