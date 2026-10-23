
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import Button from "@/components/Button";

export default function TripReady() {
  const { pickup, dropoff } = useLocalSearchParams();

  return (
    <SafeAreaView style={s.container}>
      <View style={s.content}>
        <Text style={s.back}>‹</Text>
        <Text style={s.step}>Step 2 of 2</Text>
        <Text style={s.title}>Your trip is ready</Text>
        <Text style={s.sub}>Review your trip before viewing the route.</Text>

        <View style={s.card}>
          <Text style={s.label}>STARTING POINT</Text>
          <Text style={s.location}>📍 {pickup}</Text>
          <View style={s.line} />
          <Text style={s.label}>DESTINATION</Text>
          <Text style={s.location}>📍 {dropoff}</Text>
        </View>

        <View style={s.info}>
          <Text style={s.infoTitle}>Trip information</Text>
          <Text style={s.text}>◷  Estimated time: 25 min</Text>
          <Text style={s.text}>⌖  Fastest available route</Text>
        </View>
      </View>

      <View style={s.bottom}>
  <Button
    title="View route"
    onPress={() =>
      router.push({
        pathname: "/route",
        params: { pickup, dropoff },
      })
    }
  />
</View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F6F8" },
  content: { flex: 1, padding: 22 },
  back: { fontSize: 35, color: "#172535" },
  step: { color: "#F4512A", fontWeight: "600", marginTop: 12 },
  title: { fontSize: 30, fontWeight: "700", color: "#172535", marginTop: 7 },
  sub: { color: "#8F979F", marginVertical: 20 },
  card: { backgroundColor: "#fff", borderRadius: 22, padding: 20 },
  label: { fontSize: 11, color: "#9AA1A9", fontWeight: "600", marginTop: 5 },
  location: { fontSize: 16, fontWeight: "600", color: "#172535", marginTop: 5 },
  line: { height: 1, backgroundColor: "#E5E7E9", marginVertical: 20 },
  info: { backgroundColor: "#fff", borderRadius: 20, padding: 20, marginTop: 16 },
  infoTitle: { fontSize: 17, fontWeight: "700", color: "#172535", marginBottom: 14 },
  text: { color: "#59636D", marginBottom: 12 },
  bottom: { backgroundColor: "#fff", padding: 18 },
});
