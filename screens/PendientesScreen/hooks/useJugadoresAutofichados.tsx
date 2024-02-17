import { useState } from "react";

interface GetJugadoresAutofichados {
  clubId: number;
}

const useJugadoresAutofichados = () => {
  const [isLoading, setLoading] = useState(false);

  const getJugadoresAutofichados = async (props: GetJugadoresAutofichados) => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://edefi.com.ar/appdelegados/GetJugadoresAutofichadosConEstado?clubid=${props.clubId}`,
        { method: "GET" }
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { getJugadoresAutofichados, isLoading };
};

export default useJugadoresAutofichados;
