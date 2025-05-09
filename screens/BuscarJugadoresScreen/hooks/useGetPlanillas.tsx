import { useState } from "react";

interface Props {
  codigoAlfanumerico: string;
}

const useGetPlanillas = () => {
  const [isLoading, setLoading] = useState(false);

  const getPlanillas = async (props: Props): Promise<ApiResponse> => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://www.edefi.com.ar/Appdelegados/GetPlanillas?codigoAlfanumerico=${props.codigoAlfanumerico}`,
        {
          method: "GET",
        }
      );
      const json = (await response.json()) as ApiResponse;
      return json;
    } catch (error) {
      console.error(error);
      return {
        huboError: true,
        mensajeDeError: "Error al conectar con el servidor.",
        contenido: null,
      };
    } finally {
      // console.log(`Termina request ${new Date().toUTCString()}`);
      setLoading(false);
    }
  };

  return { getPlanillas, isLoading };
};

export default useGetPlanillas;
