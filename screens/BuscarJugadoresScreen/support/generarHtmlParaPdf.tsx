import { EstadoJugadorEnum, IJugador } from "../../../types/IJugador";

export const esteMismisimoMomento = () => {
  const d = new Date();
  const dformat =
    [d.getDate(), d.getMonth() + 1, d.getFullYear()].join("_") +
    "-" +
    [d.getHours(), d.getMinutes(), d.getSeconds()].join("_");

  return dformat;
};

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

		
	.inhabilitado {
		background-color: #111 !important;
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
		left: 375px;
		bottom: 5px;
	}

	.logo-contenedor {
		position: absolute;
		width: 450px;
		height: 200px;
	}

  .fechaImpresion {
    position: absolute;
    font-size: 0.8rem;
		left: 30px;
		bottom: 5px;
  }

	.tarjetas {
		position: absolute;
		right: 30px;
		bottom: 110px;
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
          <div class="${EstadoJugadorEnum[
            jug.Estado
          ].toLowerCase()}">JUGADOR ${EstadoJugadorEnum[
          jug.Estado
        ].toUpperCase()}</div>
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

    const logo = `
    		<div class="logo-contenedor">
			<img class="logo" src="https://edefi.com.ar/Content/logo.svg" alt="EDEFI" />
		</div>`;

    let tarjetas = `
    <div class="tarjetas">
    `;

    if (jug.TarjetasAmarillas !== 0)
      tarjetas =
        tarjetas +
        `
    		<span class="cantidadDeAmarillas">
					${jug.TarjetasAmarillas}
				</span>
				<span class="tarjetaAmarilla"></span>`;

    if (jug.TarjetasRojas !== 0)
      tarjetas =
        tarjetas +
        `
        <div>
					<span class="cantidadDeAmarillas">
						${jug.TarjetasRojas}
					</span>
					<span class="tarjetaRoja"></span>
				</div>`;

    tarjetas = tarjetas + "</div>";

    const fechaImpresion = `<div class="fechaImpresion">
      FECHA: ${esteMismisimoMomento()}
    </div>`;

    carnet = carnet + datos + logo + fechaImpresion + tarjetas + "</div>";

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
