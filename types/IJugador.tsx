export interface IJugador {
  Estado: EstadoJugadorEnum;
  Nombre: string;
  Apellido: string;
  DNI: string;
  Equipo: string;
  FechaNacimiento: string;
  FechaVencimiento: string;
  TipoLiga: string;
  Categoria: string;
  FotoBase64: string;
}

export enum EstadoJugadorEnum {
  Activo = 1,
  Inhabilitado = 2,
  Suspendido = 3,
}
