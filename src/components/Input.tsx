import { TextInput, StyleSheet } from "react-native";

export default function Input(props: any) {
  return (
    <TextInput
      {...props}
      style={styles.input}
      placeholderTextColor="#9AA1A9"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 53,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E5E8",
    borderRadius: 17,
    paddingHorizontal: 17,
    fontSize: 15,
    color: "#1D2935",
  },
});