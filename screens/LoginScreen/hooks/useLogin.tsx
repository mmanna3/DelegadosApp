import { useState, useEffect } from "react";

interface DatosUsuario {
  Email: string;
  Password: string;
}

const useLogin = () => {
  const [isLoading, setLoading] = useState(true);

  const login = async (props: DatosUsuario) => {
    let formData = new FormData();
    formData.append("Email", props.Email);
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
