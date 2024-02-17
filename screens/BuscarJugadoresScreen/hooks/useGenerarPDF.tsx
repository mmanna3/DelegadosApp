import * as FileSystem from "expo-file-system";
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";
import { useState } from "react";
import { useAppContext } from "../../../store";
import {
  esteMismisimoMomento,
  generarHtml,
} from "../support/generarHtmlParaPdf";

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
