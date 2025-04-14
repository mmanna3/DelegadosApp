import { useState } from "react";
import useGetPlanillas from "./useGetPlanillas";

const useGenerarPlanillas = () => {
  const [estaGenerandoPDF, setEstaGenerandoPDF] = useState(false);
  const { getPlanillas, isLoading } = useGetPlanillas();

  const generarPlanillas = async (codigoAlfanumerico: string) => {
    try {
      const planillas = await getPlanillas({
        codigoAlfanumerico,
      });

      console.log(planillas);

      // setEstaGenerandoPDF(true);
      // const { uri } = await Print.printToFileAsync({
      //   html: generarHtml(planillas),
      // });
      // const pdfRenombrado = `${uri.slice(
      //   0,
      //   uri.lastIndexOf("/") + 1
      // )}planillas_${esteMismisimoMomento()}.pdf`;

      // await FileSystem.moveAsync({
      //   from: uri,
      //   to: pdfRenombrado,
      // });

      // await shareAsync(pdfRenombrado, {
      //   UTI: ".pdf",
      //   mimeType: "application/pdf",
      // });
    } catch (error) {
      console.error(error);
    } finally {
      setEstaGenerandoPDF(false);
    }
  };

  return { generarPlanillas, isLoading: estaGenerandoPDF };
};

export default useGenerarPlanillas;
