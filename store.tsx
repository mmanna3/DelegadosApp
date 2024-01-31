import "react";
import { ReactNode, createContext, useContext, useState } from "react";
import { IJugador } from "./types/IJugador";

type UsuarioLogueado = {
  usuario: string;
  club: string;
  clubId: number;
};

interface ContextValue {
  usuarioLogueado: UsuarioLogueado | null;
  setUsuarioLogueado: React.Dispatch<
    React.SetStateAction<UsuarioLogueado | null>
  >;
  jugadores: IJugador[] | null;
  setJugadores: React.Dispatch<React.SetStateAction<IJugador[] | null>>;
}

type Props = { children: ReactNode };

export const AppContext = createContext<ContextValue | null>(null);

export const AppContextProvider = ({ children }: Props) => {
  const [usuarioLogueado, setUsuarioLogueado] =
    useState<UsuarioLogueado | null>(null);

  const [jugadores, setJugadores] = useState<IJugador[] | null>(null);

  return (
    <AppContext.Provider
      value={{ usuarioLogueado, setUsuarioLogueado, jugadores, setJugadores }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const currentAppContext = useContext(AppContext);

  if (!currentAppContext) {
    throw new Error(
      "useUsuarioContext has to be used within <CurrentUserContext.Provider>"
    );
  }

  return currentAppContext;
};
