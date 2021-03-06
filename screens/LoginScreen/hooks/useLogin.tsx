import { useState } from "react";

interface DatosUsuario {
  Usuario: string;
  Password: string;
}

const useLogin = () => {
  const [isLoading, setLoading] = useState(false);

  const login = async (props: DatosUsuario) => {
    setLoading(true);
    let formData = new FormData();
    formData.append("Usuario", props.Usuario);
    formData.append("Password", props.Password);

    try {
      const response = await fetch(
        "https://www.edefi.com.ar/account/LoginDeAppDelegados",
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

  return { login, isLoading };
};

export default useLogin;
