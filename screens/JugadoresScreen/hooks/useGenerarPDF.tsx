import * as FileSystem from "expo-file-system";
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";
import { useState } from "react";
import { useAppContext } from "../../../store";
import { generarHtml } from "../support/generarHtmlParaPdf";

const html = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body style="text-align: center;">
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
      Hello Expo!
    </h1>
    <img
      src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
      style="width: 90vw;" />
  </body>
</html>
`;

const esteMismisimoMomento = () => {
  const d = new Date();
  const dformat =
    [d.getDate(), d.getMonth() + 1, d.getFullYear()].join("_") +
    "-" +
    [d.getHours(), d.getMinutes(), d.getSeconds()].join("_");

  return dformat;
};

const useGenerarPDF = () => {
  const [isLoading, setLoading] = useState(false);
  const { jugadores } = useAppContext();

  const generarPDF = async () => {
    try {
      setLoading(true);
      const { uri } = await Print.printToFileAsync({
        html: generarHtml(jugadores),
      });
      const pdfRenombrado = `${uri.slice(
        0,
        uri.lastIndexOf("/") + 1
      )}jugadores_${esteMismisimoMomento()}.pdf`;

      await FileSystem.moveAsync({
        from: uri,
        to: pdfRenombrado,
      });

      await shareAsync(pdfRenombrado, {
        UTI: ".pdf",
        mimeType: "application/pdf",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { generarPDF, isLoading };
};

export default useGenerarPDF;
