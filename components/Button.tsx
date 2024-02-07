import { Pressable, StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";

interface Props {
  onPress: () => void;
  title: string;
}

export default function Button(props: Props) {
  const { onPress, title = "Save" } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: Colors.verde,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.7,
    color: "white",
  },
});
