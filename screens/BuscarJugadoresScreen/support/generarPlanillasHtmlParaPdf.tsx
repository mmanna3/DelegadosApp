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
    
    padding: 30mm 15mm;
    margin: 0 auto;
    background: white;
    box-sizing: border-box;
    page-break-after: always;
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
    margin-top: 30px;
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
</style>
`;

const generarPlanillaHtml = (planilla: any, torneo: string, equipo: string) => {
  return `
    <div class="pagina">
      <div class="titulo">PLANILLA DE JUEGO (E.D.E.F.I)</div>
      
      <div class="encabezado">
        <div class="encabezado-grupo">
          <label>Torneo: ${torneo}</label>
          <label>Equipo: ${equipo}</label>
          <label>GOLES: <input type="text" /></label>
          <label>Min: <input type="text" /><input type="text" /></label>
        </div>
        <div class="encabezado-grupo">
          <label>Categoría: ${planilla.Categoria}</label>
          <div class="fecha-formato">
            <label>Día:</label>
            <span> </span>/<span> </span>/<span> </span>
          </div>
        </div>
      </div>

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
          ${planilla.Jugadores.map(
            (jugador: any) => `
            <tr>
              <td></td>
              <td>${primeraMayuscRestoMinusc(jugador.Nombre)}</td>
              <td>${jugador.DNI}</td>
              <td>${jugador.Estado !== "Activo" ? jugador.Estado : ""}</td>
              <td></td>
            </tr>
          `
          ).join("")}
        </tbody>
      </table>

      <div class="encabezado">
        <div class="encabezado-grupo">
          <label>DT: <input type="text" /></label>
        </div>
        <div class="encabezado-grupo">
          <label>AUX: <input type="text" /></label>
        </div>
      </div>

      <div class="observaciones">
        <div class="observaciones-item">
          <label>Jug. Expulsado: <input type="text" /></label>
        </div>
        <div class="observaciones-item">
          <label>Público Expulsado: <input type="text" /></label>
        </div>
        <div class="observaciones-item">
          <label>Observaciones: <input type="text" /></label>
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
    </div>
  `;
};

export const generarPlanillasHtml = (planillas: any) => {
  if (!planillas || !planillas.contenido || !planillas.contenido.Planillas)
    return "";

  const torneo = planillas.contenido.Torneo || "";
  const equipo = planillas.contenido.Equipo || "";

  // Generar todas las planillas en un solo contenedor para evitar páginas en blanco
  const planillasHtml = planillas.contenido.Planillas.map((planilla: any) =>
    generarPlanillaHtml(planilla, torneo, equipo)
  ).join("");

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
