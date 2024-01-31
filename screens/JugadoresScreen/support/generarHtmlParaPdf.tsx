import { EstadoJugadorEnum, IJugador } from "../../../types/IJugador";

const stylesTag = `
<style>

	.contenedor-general {
		display: grid;
		grid-template-columns: auto auto;
	}

	.carnet-contenedor {
		width: 450px;
		height: 200px;
		border: 2px solid black;
		border-radius: 20px;
		padding: 15px;
		margin-bottom: 10px;
		margin-right: 10px;
		display: flex;
		position: relative
	}

	.imagen {
		width: 130px;
		height: 130px;
	}

	.datos {
		margin-left: 20px;
		font-size: 16px;
		font-weight: bold;
	}

	.verde {
		color: #01aa59 !important;
	}

	.rojo {
		color: #e81f05 !important;
	}

	.azul {
		color: #0038ba !important;
	}

	.datos div {
		margin-bottom: 5px;
	}

	.suspendido {
		background-color: #e81f05 !important;
		-webkit-print-color-adjust: exact;
		padding: 5px;
		padding-left: 10px;
		padding-right: 10px;
		border-radius: 5px;
		color: white !important;
	}

	.logo {
		width: 70px;
		position: absolute;
		left: 354px;
		bottom: 25px;
	}

	.logo-contenedor {
		position: absolute;
		width: 450px;
		height: 200px;
	}

	.tarjetas {
		position: absolute;
		right: 30px;
		bottom: 95px;
	}

	.tarjetaAmarilla {
		width: 10px;
		height: 15px;
		background-color: yellow;
		display: inline-block;
		border: 1px solid black;
		margin-left: 2px;
	}

	.tarjetaRoja {
		width: 10px;
		height: 15px;
		background-color: red;
		display: inline-block;
		border: 1px solid black;
		margin-left: 2px;
	}
</style>
`;

const generarTagsDeJugadores = (jugadores: IJugador[]) => {
  let carnets = "";

  jugadores.forEach((jug) => {
    let carnet = `
      <div class="carnet-contenedor">
        <img class="imagen" src="data:image/png;base64, ${jug.FotoBase64}" alt="foto" />        
    `;

    let datos = `
    <div class="datos">  
    `;

    if (
      jug.Estado === EstadoJugadorEnum.Inhabilitado ||
      jug.Estado === EstadoJugadorEnum.Suspendido
    ) {
      datos =
        datos +
        `
          <div class="suspendido">JUGADOR ${EstadoJugadorEnum[jug.Estado]}</div>
          <div class="nombre">${jug.Nombre} ${jug.Apellido}</div>
          <div>DNI: ${jug.DNI}</div>
          <div>${jug.FechaNacimiento}</div>
          <div>${jug.Equipo}</div>
          <div>${jug.TipoLiga}</div>
        `;
    } else {
      datos =
        datos +
        `
          <div class="nombre verde">${jug.Nombre} ${jug.Apellido}</div>
          <div class="azul">DNI: ${jug.DNI}</div>
          <div class="azul">${jug.FechaNacimiento}</div>
          <div class="rojo">${jug.Equipo}</div>
          <div class="rojo">${jug.TipoLiga}</div>
        `;
    }

    datos = datos + "</div>";
    carnet = carnet + datos + "</div>";

    carnets = carnets + carnet;
  });

  return carnets;
};

export const generarHtml = (jugadores: IJugador[] | null) => {
  if (!jugadores) return "";

  const htmlTag = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body style="text-align: center;">
    <div class="contenedor-general">
      ${generarTagsDeJugadores(jugadores)}
    </div>
  </body>
</html>
`;

  return stylesTag + htmlTag;
};
