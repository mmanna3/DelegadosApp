import * as FileSystem from "expo-file-system";
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";
import { useState } from "react";
import { esteMismisimoMomento } from "../support/generarHtmlParaPdf";
import useGetPlanillas from "./useGetPlanillas";

const useGenerarPlanillas = () => {
  const [estaGenerandoPDF, setEstaGenerandoPDF] = useState(false);
  const { getPlanillas, isLoading: estaHaciendoElRequest } = useGetPlanillas();

  const generarPlanillas = async (codigoAlfanumerico: string) => {
    try {
      const planillas = await getPlanillas({
        codigoAlfanumerico,
      });

      console.log(planillas);

      setEstaGenerandoPDF(true);
      const { uri } = await Print.printToFileAsync({
        html: generarPlanillasHtml(planillas),
      });
      const pdfRenombrado = `${uri.slice(
        0,
        uri.lastIndexOf("/") + 1
      )}planillas_${esteMismisimoMomento()}.pdf`;

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
      setEstaGenerandoPDF(false);
    }
  };

  return {
    generarPlanillas,
    isLoading: estaGenerandoPDF || estaHaciendoElRequest,
  };
};

export default useGenerarPlanillas;
