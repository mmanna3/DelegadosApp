import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system";
import { primeraMayuscRestoMinusc } from "../components/JugadorActivoCard";

const stylesTag = `
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  * {
    font-family: 'Roboto', sans-serif;
  }

  @page {
    size: A4;
    margin: 25mm 15mm 25mm 15mm;
  }

  .pagina {
    width: 210mm;
    padding: 20mm 15mm;
    margin: 0 auto;
    background: white;
    box-sizing: border-box;
    page-break-after: always;
    position: relative;
  }

  .logo-marca-agua {
    position: absolute;
    top: 10mm;
    left: 15mm;
    z-index: 1;
    opacity: 0.2;
  }

  .logo-marca-agua img {
    width: 60mm;
    height: auto;
  }

  .pagina:last-child {
    page-break-after: avoid;
  }

  .titulo {
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .encabezado {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .encabezado-grupo {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .encabezado-grupo label {
    font-weight: 500;
  }

  .encabezado-grupo input {
    border: none;
    border-bottom: 1px solid #000;
    width: 80px;
    padding: 5px;
  }

  .input-largo {
    border: none;
    border-bottom: 1px solid #000;
    width: 200px;
    padding: 5px;
  }

  .fecha-formato {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .fecha-formato span {
    display: inline-block;
    width: 20px;
    text-align: center;
  }

  .faltas {
    margin: 20px 0;
  }

  .faltas-titulo {
    font-weight: 500;
    margin-bottom: 10px;
  }

  .faltas-contenedor {
    display: flex;
    justify-content: space-between;
  }

  .faltas-grupo {
    display: flex;
    gap: 10px;
  }

  .faltas-checkbox {
    width: 20px;
    height: 20px;
    border: 1px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }

  .tabla {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }

  .tabla th, .tabla td {
    border: 1px solid #000;
    padding: 8px;
    text-align: left;
  }

  .tabla th {
    background-color: #f5f5f5;
    font-weight: 500;
  }

  .firmas {
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
  }

  .firma-grupo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  .firma-linea {
    width: 200px;
    border-bottom: 1px solid #000;
  }

  .observaciones {
    margin-top: 20px;
  }

  .observaciones-item {
    margin-bottom: 10px;
  }
  
  .numero-pagina {
    position: absolute;
    bottom: 10mm;
    right: 15mm;
    font-size: 12px;
  }
</style>
`;

const generarPlanillaHtml = async (
  planilla: any,
  torneo: string,
  equipo: string
) => {
  // Cargar la imagen y convertirla a base64
  try {
    const logoAsset = Asset.fromModule(
      require("../../../assets/images/logo.png")
    );
    await logoAsset.downloadAsync();

    // Leer el archivo como base64
    const base64 = await FileSystem.readAsStringAsync(
      logoAsset.localUri || "",
      {
        encoding: FileSystem.EncodingType.Base64,
      }
    );

    // Dividir los jugadores en grupos de 10 por página
    const jugadores = planilla.Jugadores || [];
    const jugadoresPorPagina = 10;
    const totalPaginas = Math.ceil(jugadores.length / jugadoresPorPagina);

    let paginasHtml = "";

    // Generar cada página
    for (let i = 0; i < totalPaginas; i++) {
      const inicio = i * jugadoresPorPagina;
      const fin = Math.min(inicio + jugadoresPorPagina, jugadores.length);
      const jugadoresEnPagina = jugadores.slice(inicio, fin);
      const esUltimaPagina = i === totalPaginas - 1;
      const numeroPagina = i + 1;

      // Determinar si mostrar el encabezado completo o simplificado
      const mostrarEncabezadoCompleto = i === 0;

      paginasHtml += `
      <div class="pagina">
        <div class="logo-marca-agua">
          <img src="data:image/png;base64,${base64}" alt="Logo EDEFI" />
        </div>
        <div class="titulo">PLANILLA DE JUEGO - E.De.F.I</div>
        
        <div class="encabezado">
          <div class="encabezado-grupo">
            <label>Torneo: ${torneo}</label>
            <label>Equipo: ${equipo}</label>
            ${
              mostrarEncabezadoCompleto
                ? `
            <label>GOLES: <input type="text" /></label>
            <label>Min: <input type="text" /><input type="text" /></label>
            `
                : ""
            }
          </div>
          <div class="encabezado-grupo">
            <label>Categoría: ${planilla.Categoria}</label>
            ${
              mostrarEncabezadoCompleto
                ? `
            <div class="fecha-formato">
              <label>Día:</label>
              <span> </span>/<span> </span>/<span> </span>
            </div>
            `
                : ""
            }
          </div>
        </div>

        ${
          mostrarEncabezadoCompleto
            ? `
        <div class="faltas">
          <div class="faltas-titulo">Faltas Acumuladas:</div>
          <div class="faltas-contenedor">
            <div class="faltas-grupo">
              <label>1er T:</label>
              <div class="faltas-checkbox">1</div>
              <div class="faltas-checkbox">2</div>
              <div class="faltas-checkbox">3</div>
              <div class="faltas-checkbox">4</div>
              <div class="faltas-checkbox">5</div>
            </div>
            <div class="faltas-grupo">
              <label>2do T:</label>
              <div class="faltas-checkbox">1</div>
              <div class="faltas-checkbox">2</div>
              <div class="faltas-checkbox">3</div>
              <div class="faltas-checkbox">4</div>
              <div class="faltas-checkbox">5</div>
            </div>
          </div>
        </div>
        `
            : ""
        }

        <table class="tabla">
          <thead>
            <tr>
              <th>Nº</th>
              <th>Apellido y Nombre</th>
              <th>D.N.I.</th>
              <th>Firma</th>
              <th>Goles</th>
            </tr>
          </thead>
          <tbody>
            ${jugadoresEnPagina
              .map(
                (jugador: any) => `
              <tr>
                <td></td>
                <td>${primeraMayuscRestoMinusc(jugador.Nombre)}</td>
                <td>${jugador.DNI}</td>
                <td>${jugador.Estado !== "Activo" ? jugador.Estado : ""}</td>
                <td></td>
              </tr>
            `
              )
              .join("")}
          </tbody>
        </table>

        ${
          esUltimaPagina
            ? `
        <div class="encabezado">
          <div class="encabezado-grupo">
            <label>DT: <input style="width: 200px" type="text" /></label>
          </div>
          <div class="encabezado-grupo">
            <label>AUX: <input style="width: 200px" type="text" /></label>
          </div>
        </div>

        <div class="observaciones">
          <div class="observaciones-item">
            <label>Jug. Expulsado: </label>
          </div>
          <div class="observaciones-item">
            <label>Público Expulsado: </label>
          </div>
          <div class="observaciones-item">
            <label>Observaciones: </label>
          </div>
        </div>

        <div class="firmas">
          <div class="firma-grupo">
            <div class="firma-linea"></div>
            <label>Firma Delegado LOCAL</label>
          </div>
          <div class="firma-grupo">
            <div class="firma-linea"></div>
            <label>Firma Delegado VISITANTE</label>
          </div>
          <div class="firma-grupo">
            <div class="firma-linea"></div>
            <label>Firma Árbitro</label>
          </div>
        </div>
        `
            : ""
        }
        
        <div class="numero-pagina">Página ${numeroPagina} de ${totalPaginas}</div>
      </div>
    `;
    }

    return paginasHtml;
  } catch (error) {
    console.error("Error al cargar la imagen:", error);

    // Dividir los jugadores en grupos de 10 por página
    const jugadores = planilla.Jugadores || [];
    const jugadoresPorPagina = 10;
    const totalPaginas = Math.ceil(jugadores.length / jugadoresPorPagina);

    let paginasHtml = "";

    // Generar cada página
    for (let i = 0; i < totalPaginas; i++) {
      const inicio = i * jugadoresPorPagina;
      const fin = Math.min(inicio + jugadoresPorPagina, jugadores.length);
      const jugadoresEnPagina = jugadores.slice(inicio, fin);
      const esUltimaPagina = i === totalPaginas - 1;
      const numeroPagina = i + 1;

      // Determinar si mostrar el encabezado completo o simplificado
      const mostrarEncabezadoCompleto = i === 0;

      paginasHtml += `
      <div class="pagina">
        <div class="titulo">PLANILLA DE JUEGO (E.D.E.F.I)</div>
        
        <div class="encabezado">
          <div class="encabezado-grupo">
            <label>Torneo: ${torneo}</label>
            <label>Equipo: ${equipo}</label>
            ${
              mostrarEncabezadoCompleto
                ? `
            <label>GOLES: <input type="text" /></label>
            <label>Min: <input type="text" /><input type="text" /></label>
            `
                : ""
            }
          </div>
          <div class="encabezado-grupo">
            <label>Categoría: ${planilla.Categoria}</label>
            ${
              mostrarEncabezadoCompleto
                ? `
            <div class="fecha-formato">
              <label>Día:</label>
              <span> </span>/<span> </span>/<span> </span>
            </div>
            `
                : ""
            }
          </div>
        </div>

        ${
          mostrarEncabezadoCompleto
            ? `
        <div class="faltas">
          <div class="faltas-titulo">Faltas Acumuladas:</div>
          <div class="faltas-contenedor">
            <div class="faltas-grupo">
              <label>1er T:</label>
              <div class="faltas-checkbox">1</div>
              <div class="faltas-checkbox">2</div>
              <div class="faltas-checkbox">3</div>
              <div class="faltas-checkbox">4</div>
              <div class="faltas-checkbox">5</div>
            </div>
            <div class="faltas-grupo">
              <label>2do T:</label>
              <div class="faltas-checkbox">1</div>
              <div class="faltas-checkbox">2</div>
              <div class="faltas-checkbox">3</div>
              <div class="faltas-checkbox">4</div>
              <div class="faltas-checkbox">5</div>
            </div>
          </div>
        </div>
        `
            : ""
        }

        <table class="tabla">
          <thead>
            <tr>
              <th>Nº</th>
              <th>Apellido y Nombre</th>
              <th>D.N.I.</th>
              <th>Firma</th>
              <th>Goles</th>
            </tr>
          </thead>
          <tbody>
            ${jugadoresEnPagina
              .map(
                (jugador: any) => `
              <tr>
                <td></td>
                <td>${primeraMayuscRestoMinusc(jugador.Nombre)}</td>
                <td>${jugador.DNI}</td>
                <td>${jugador.Estado !== "Activo" ? jugador.Estado : ""}</td>
                <td></td>
              </tr>
            `
              )
              .join("")}
          </tbody>
        </table>

        ${
          esUltimaPagina
            ? `
        <div class="encabezado">
          <div class="encabezado-grupo">
            <label>DT: <input class="input-largo" type="text" /></label>
          </div>
          <div class="encabezado-grupo">
            <label>AUX: <input class="input-largo" type="text" /></label>
          </div>
        </div>

        <div class="observaciones">
          <div class="observaciones-item">
            <label>Jug. Expulsado: </label>
          </div>
          <div class="observaciones-item">
            <label>Público Expulsado: </label>
          </div>
          <div class="observaciones-item">
            <label>Observaciones: </label>
          </div>
        </div>

        <div class="firmas">
          <div class="firma-grupo">
            <div class="firma-linea"></div>
            <label>Firma Delegado LOCAL</label>
          </div>
          <div class="firma-grupo">
            <div class="firma-linea"></div>
            <label>Firma Delegado VISITANTE</label>
          </div>
          <div class="firma-grupo">
            <div class="firma-linea"></div>
            <label>Firma Árbitro</label>
          </div>
        </div>
        `
            : ""
        }
        
        <div class="numero-pagina">Página ${numeroPagina} de ${totalPaginas}</div>
      </div>
    `;
    }

    return paginasHtml;
  }
};

export const generarPlanillasHtml = async (planillas: any) => {
  if (!planillas || !planillas.contenido || !planillas.contenido.Planillas)
    return "";

  const torneo = planillas.contenido.Torneo || "";
  const equipo = planillas.contenido.Equipo || "";

  // Generar todas las planillas en un solo contenedor para evitar páginas en blanco
  const planillasHtml = await Promise.all(
    planillas.contenido.Planillas.map((planilla: any) =>
      generarPlanillaHtml(planilla, torneo, equipo)
    )
  ).then((htmls) => htmls.join(""));

  const htmlTag = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        <title>Planillas de Juego</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: white;">
        ${planillasHtml}
      </body>
    </html>
  `;

  return stylesTag + htmlTag;
};
