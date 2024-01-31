export interface IJugadorAutofichado {
  Nombre: string;
  Apellido: string;
  DNI: string;
  Equipo: string;
  FechaNacimiento: string;
  Estado: EstadoJugadorAutofichadoEnum;
  EstadoDescripcion: string;
  MotivoDeRechazo: string;
}

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
  TarjetasAmarillas: number;
  TarjetasRojas: number;
}

export enum EstadoJugadorAutofichadoEnum {
  PendienteDeAprobacion = 1,
  Aprobado = 2,
  Rechazado = 3,
}

export enum EstadoJugadorEnum {
  Activo = 1,
  Inhabilitado = 2,
  Suspendido = 3,
}
