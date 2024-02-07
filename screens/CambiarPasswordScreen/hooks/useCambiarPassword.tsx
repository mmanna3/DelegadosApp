import { useState } from "react";

interface DatosUsuario {
  Usuario: string;
  Password: string;
}

const useCambiarPassword = () => {
  const [isLoading, setLoading] = useState(false);

  const cambiarPassword = async (props: DatosUsuario) => {
    setLoading(true);
    let formData = new FormData();
    formData.append("Usuario", props.Usuario);
    formData.append("NuevoPassword", props.Password);

    console.log(formData);

    try {
      const response = await fetch(
        "https://www.edefi.com.ar/account/CambiarPasswordAppDelegados",
        {
          method: "POST",
          body: formData,
        }
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { cambiarPassword, isLoading };
};

export default useCambiarPassword;
