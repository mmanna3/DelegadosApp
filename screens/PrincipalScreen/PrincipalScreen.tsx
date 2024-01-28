import * as React from "react";
import { View, useWindowDimensions } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";
import JugadoresScreen from "../JugadoresScreen/JugadoresScreen";

const FirstRoute = () => <JugadoresScreen />;

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#ff4081" }} />
);

const renderScene = SceneMap({
  rivales: FirstRoute,
  misjugadores: SecondRoute,
});

export default function PrincipalsScreen() {
  const layout = useWindowDimensions();

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
