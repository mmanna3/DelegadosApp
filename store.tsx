import "react";
import { ReactNode, createContext, useContext, useState } from "react";

type UsuarioLogueado = {
  usuario: string;
  club: string;
  clubId: number;
};

interface UsuarioContextValue {
  usuarioLogueado: UsuarioLogueado | null;
  setUsuarioLogueado: React.Dispatch<
    React.SetStateAction<UsuarioLogueado | null>
  >;
}

type Props = { children: ReactNode };

export const UsuarioContext = createContext<UsuarioContextValue | null>(null);

export const UsuarioContextProvider = ({ children }: Props) => {
  const [usuarioLogueado, setUsuarioLogueado] =
    useState<UsuarioLogueado | null>(null);

  return (
    <UsuarioContext.Provider value={{ usuarioLogueado, setUsuarioLogueado }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export const useUsuarioLogueado = () => {
  const currentUserContext = useContext(UsuarioContext);

  if (!currentUserContext) {
    throw new Error(
      "useUsuarioContext has to be used within <CurrentUserContext.Provider>"
    );
  }

  return currentUserContext;
};
