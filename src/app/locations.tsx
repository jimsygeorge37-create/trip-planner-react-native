
import { useState } from "react";
import * as Location from "expo-location";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "@/components/Input";
import Button from "@/components/Button";

const places = [
  ["⌂", "Home", "Villa 12, Street 840, Zone 61 · West Bay"],
  ["⌂", "Marina Office Tower", "Level 14, Al Fardan Rd · Lusail Marina"],
  ["◷", "Corniche Ferry Terminal", "Gate 3, Corniche Promenade"],
  ["◷", "Msheireb Metro Station", "Al Kinana St · Msheireb Downtown"],
  ["◷", "Hamad International Airport", "Doha, Qatar"],
];

export default function Locations() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [active, setActive] = useState("pickup");

  const selectPlace = (name: string) =>
    active === "pickup" ? setPickup(name) : setDropoff(name);

  const useCurrentLocation = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();

  if (status !== "granted") {
    alert("Location permission is required");
    return;
  }

  const location = await Location.getCurrentPositionAsync({});

  const address = await Location.reverseGeocodeAsync({ //to get location name
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
  });

  if (address.length > 0) {
    const place = address[0];

    setPickup(
      [place.name, place.city, place.region]
        .filter(Boolean)
        .join(", ")
    );
  }
};

  return (
    <SafeAreaView style={s.container}>
      <View style={s.header}>
        <Text style={s.back}>‹</Text>
        <View>
          <Text style={s.title}>Where are you going?</Text>
          <Text style={s.sub}>Step 1 of 2 · Set pickup and drop-off</Text>
        </View>
      </View>

      <View style={s.content}>
        <View style={s.box}>
          <Text style={s.pickup}>●  Pickup</Text>
          <Input
            placeholder="Choose a starting point"
            value={pickup}
            onChangeText={setPickup}
            onFocus={() => setActive("pickup")}
          />

          <View style={s.divider} />

          <Text style={s.drop}>Drop-off</Text>
          <Input
            placeholder="Choose a destination"
            value={dropoff}
            onChangeText={setDropoff}
            onFocus={() => setActive("dropoff")}
          />

          <Pressable
            style={s.swap}
            onPress={() => {
              setPickup(dropoff);
              setDropoff(pickup);
            }}
          >
            <Text>↕</Text>
          </Pressable>
        </View>

        <View style={s.actions}>
          <Pressable style={s.action} onPress={useCurrentLocation}>
  <Text>⌾  Use current</Text>
</Pressable>
          <Pressable style={s.action}>
            <Text>♧  Pick on map</Text>
          </Pressable>
        </View>

        <Text style={s.section}>
          {active === "pickup" ? "Set as pickup" : "Set as drop-off"}
        </Text>

        <View style={s.places}>
          {places.map(([icon, name, address]) => (
            <Pressable key={name} style={s.place} onPress={() => selectPlace(name)}>
              <View style={s.icon}>
                <Text>{icon}</Text>
              </View>
              <View>
                <Text style={s.name}>{name}</Text>
                <Text style={s.address}>{address}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </View>

      <View style={s.bottom}>
        <Button
  title="Next"
  onPress={() => {
    if (!pickup || !dropoff) {
      alert("Please select pickup and drop-off");
      return;
    }

    router.push({
      pathname: "/trip-ready",
      params: { pickup, dropoff },
    });
  }}
/>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F6F8" },
  header: {
    flexDirection: "row",
    padding: 18,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E8EA",
  },
  back: { fontSize: 35, marginRight: 15, color: "#172535" },
  title: { fontSize: 25, fontWeight: "700", color: "#172535" },
  sub: { color: "#8F979F", marginTop: 6 },
  content: { flex: 1, padding: 18 },
  box: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 18,
    position: "relative",
  },
  pickup: { color: "#F4512A", fontWeight: "700", marginBottom: 5 },
  drop: { color: "#9AA1A9", marginBottom: 5 },
  divider: { height: 1, backgroundColor: "#E5E7E9", marginVertical: 8 },
  swap: {
    position: "absolute",
    right: 16,
    top: 40,
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#F1F3F5",
    alignItems: "center",
    justifyContent: "center",
  },
  actions: { flexDirection: "row", gap: 10, marginVertical: 16 },
  action: {
    flex: 1,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#E3E6E8",
    alignItems: "center",
    justifyContent: "center",
  },
  section: { color: "#8F979F", marginBottom: 10 },
  places: { backgroundColor: "#fff", borderRadius: 22, overflow: "hidden" },
  place: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7E9",
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F3F5F6",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  name: { fontSize: 15, fontWeight: "600", color: "#202B37" },
  address: { fontSize: 12, color: "#9AA1A9", marginTop: 4 },
  bottom: { backgroundColor: "#fff", padding: 18 },
});
