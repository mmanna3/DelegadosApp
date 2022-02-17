import { useState, useEffect } from "react";

interface Props {
  codigoAlfanumerico: string;
}

const useGetJugadores = () => {
  const [isLoading, setLoading] = useState(false);

  const getJugadores = async (props: Props): Promise<ApiResponse> => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://www.edefi.com.ar/Appdelegados/GetJugadores?codigoAlfanumerico=${props.codigoAlfanumerico}`,
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
      setLoading(false);
    }
  };

  return { getJugadores, isLoading };
};

export default useGetJugadores;
