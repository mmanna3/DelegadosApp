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
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

	* {
		font-family: 'Roboto', sans-serif;
	}

	@page {
		size: A4;
		margin: 0;
	}

	.contenedor-general {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 10px;
		background-color: #f5f5f5;
	}

	.pagina {
		width: 210mm;
		min-height: 297mm;
		padding: 10mm;
		margin: 0 auto;
		background: white;
		box-sizing: border-box;
		page-break-after: always;
		display: flex;
		justify-content: space-between;
	}

	.columna {
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 48%;
	}

	.carnet-contenedor {
		width: 100%;
		height: 160px;
		background: linear-gradient(145deg, #ffffff, #f0f0f0);
		border-radius: 12px;
		padding: 12px;
		margin: 0 auto;
		display: flex;
		position: relative;
		box-shadow: 0 6px 12px rgba(0,0,0,0.08);
		transition: transform 0.2s ease;
		border: 1px solid rgba(0,0,0,0.1);
		page-break-inside: avoid;
	}

	.imagen {
		width: 100px;
		height: 100px;
		border-radius: 8px;
		object-fit: cover;
		box-shadow: 0 3px 6px rgba(0,0,0,0.1);
		border: 2px solid #fff;
	}

	.datos {
		margin-left: 15px;
		font-size: 13px;
		line-height: 1.4;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.verde {
		color: #2ecc71 !important;
		font-weight: 700;
	}

	.rojo {
		color: #e74c3c !important;
		font-weight: 500;
	}

	.azul {
		color: #3498db !important;
		font-weight: 500;
	}

	.datos div {
		margin-bottom: 4px;
		text-shadow: 0 1px 1px rgba(0,0,0,0.1);
	}

	.suspendido {
		background: linear-gradient(145deg, #e74c3c, #c0392b) !important;
		-webkit-print-color-adjust: exact;
		padding: 4px 8px;
		border-radius: 6px;
		color: white !important;
		font-weight: 700;
		box-shadow: 0 2px 4px rgba(0,0,0,0.2);
		font-size: 12px;
	}

	.inhabilitado {
		background: linear-gradient(145deg, #2c3e50, #34495e) !important;
		-webkit-print-color-adjust: exact;
		padding: 4px 8px;
		border-radius: 6px;
		color: white !important;
		font-weight: 700;
		box-shadow: 0 2px 4px rgba(0,0,0,0.2);
		font-size: 12px;
	}

	.logo {
		width: 50px;
		position: absolute;
		left: 290px;
		bottom: 8px;
		opacity: 0.9;
	}

	.logo-contenedor {
		position: absolute;
		width: 350px;
		height: 160px;
	}

	.fechaImpresion {
		position: absolute;
		font-size: 0.7rem;
		left: 25px;
		bottom: 8px;
		color: #7f8c8d;
		font-weight: 500;
	}

	.tarjetas {
		position: absolute;
		right: 25px;
		bottom: 85px;
		display: flex;
		gap: 6px;
		align-items: center;
	}

	.tarjetaAmarilla {
		width: 10px;
		height: 15px;
		background-color: #f1c40f !important;
		background-image: none !important;
		display: inline-block;
		border: 1px solid rgba(0,0,0,0.2);
		margin-left: 2px;
		border-radius: 2px;
		box-shadow: none !important;
		-webkit-print-color-adjust: exact !important;
		print-color-adjust: exact !important;
		color-adjust: exact !important;
		-webkit-filter: none !important;
		filter: none !important;
		opacity: 1 !important;
	}

	.tarjetaRoja {
		width: 10px;
		height: 15px;
		background-color: #e74c3c !important;
		background-image: none !important;
		display: inline-block;
		border: 1px solid rgba(0,0,0,0.2);
		margin-left: 2px;
		border-radius: 2px;
		box-shadow: none !important;
		-webkit-print-color-adjust: exact !important;
		print-color-adjust: exact !important;
		color-adjust: exact !important;
		-webkit-filter: none !important;
		filter: none !important;
		opacity: 1 !important;
	}

	.cantidadDeAmarillas {
		font-size: 0.75rem;
		font-weight: 700;
		color: #2c3e50;
		margin-right: 3px;
	}
</style>
`;

const generarTagsDeJugadores = (jugadores: IJugador[]) => {
  let carnets = "";
  let contador = 0;
  let paginaActual = "";
  let columnaIzquierda = "";
  let columnaDerecha = "";

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

    if (contador < 5) {
      columnaIzquierda += carnet;
    } else {
      columnaDerecha += carnet;
    }
    contador++;

    if (contador === 10 || jug === jugadores[jugadores.length - 1]) {
      paginaActual = `
        <div class="columna">${columnaIzquierda}</div>
        <div class="columna">${columnaDerecha}</div>
      `;
      carnets += `<div class="pagina">${paginaActual}</div>`;
      paginaActual = "";
      columnaIzquierda = "";
      columnaDerecha = "";
      contador = 0;
    }
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
  <body style="margin: 0; padding: 0; background-color: #f5f5f5;">
    ${generarTagsDeJugadores(jugadores)}
  </body>
</html>
`;

  return stylesTag + htmlTag;
};
