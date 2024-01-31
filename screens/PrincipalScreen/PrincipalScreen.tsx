import * as React from "react";
import { useWindowDimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Colors from "../../constants/Colors";
import JugadoresScreen from "../JugadoresScreen/JugadoresScreen";
import MisJugadoresScreen from "../MisJugadoresScreen/MisJugadoresScreen";

const FirstRoute = () => <JugadoresScreen />;

const SecondRoute = () => <MisJugadoresScreen />;

const renderScene = SceneMap({
  buscar: FirstRoute,
  pendientes: SecondRoute,
});

export default function PrincipalsScreen() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "buscar", title: "Buscar" },
    { key: "pendientes", title: "Pendientes" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            backgroundColor: Colors.verde,
            paddingTop: 40,
          }}
        />
      )} // <-- add this line
    />
  );
}
