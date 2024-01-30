import * as React from "react";
import { Text, View, useWindowDimensions } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";
import { useUsuarioLogueado } from "../../store";
import JugadoresScreen from "../JugadoresScreen/JugadoresScreen";

const FirstRoute = () => <JugadoresScreen />;

const SecondRoute = () => (
  <>
    <Text>Jugadores del club: </Text>
    <View style={{ flex: 1, backgroundColor: "#ff4081" }} />
  </>
);

const renderScene = SceneMap({
  rivales: FirstRoute,
  misjugadores: SecondRoute,
});

export default function PrincipalsScreen() {
  const layout = useWindowDimensions();
  const { usuarioLogueado } = useUsuarioLogueado();

  console.log(usuarioLogueado);

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "rivales", title: "Rivales" },
    { key: "misjugadores", title: "Mis jugadores" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
