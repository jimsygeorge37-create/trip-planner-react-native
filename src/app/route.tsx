
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";


export default function Route() {
  const { pickup, dropoff } = useLocalSearchParams();

  return (
    <SafeAreaView style={s.container}>
      {/* Map */}
      
        <View style={s.map}>
  <Image
    source={require("../../assets/images/map_background.png")}
    style={s.mapImage} 
    resizeMode="cover"
  />
        
        

        

        

        <View style={s.traffic}>
          <Text style={s.white}>⚠ Heavy traffic near the marina</Text>
        </View>
      </View>

      {/* Bottom sheet */}
      <View style={s.sheet}>
        <Text style={s.small}>Fastest route</Text>

        <View style={s.timeRow}>
          <Text style={s.time}>24 min</Text>
          <Text style={s.distance}>9.6 km  ·  arrive 10:42</Text>
        </View>

        <View style={s.modes}>
          <Text style={s.active}>Drive</Text>
          <Text style={s.mode}>Ride</Text>
          <Text style={s.mode}>Walk</Text>
        </View>

        <View style={s.locations}>
          <Text style={s.loc}>🔴  {pickup || "Home · Villa 12, Street 840"}</Text>
          <Text style={s.loc}>⬛  {dropoff || "Marina Office Tower · Level 14, Al Fardan Rd"}</Text>
        </View>

        <Text style={s.turnTitle}>Turn by turn</Text>

        <View style={s.turn}>
          <Text style={s.arrow}>↱</Text>
          <View style={s.flex}>
            <Text style={s.turnMain}>Head north on Street 840</Text>
            <Text style={s.turnSub}>Keep right past the service road</Text>
          </View>
          <Text>450 m</Text>
        </View>

        <View style={s.turn}>
          <Text style={s.arrow}>↱</Text>
          <View style={s.flex}>
            <Text style={s.turnMain}>Turn right onto Al Istiqlal St</Text>
            <Text style={s.turnSub}>Moderate traffic near the roundabout</Text>
          </View>
          <Text>1.8 km</Text>
        </View>
<Pressable style={s.button}>
          <Text style={s.buttonText}>➤  Start navigation</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  map: {
    height: "43%",
    backgroundColor: "#B7D3DF",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },

  back: {
    position: "absolute", top: 14, left: 14,
    width: 48, height: 48, borderRadius: 14,
    backgroundColor: "#fff", alignItems: "center",
    justifyContent: "center", zIndex: 5,
  }, mapImage: {
  width: "99%",
  height: "82%",
  position: "absolute", 
},
  backText: { fontSize: 30, color: "#172535" },

  layers: {
    position: "absolute", top: 14, right: 14,
    width: 48, height: 48, borderRadius: 14,
    backgroundColor: "#fff", alignItems: "center",
    justifyContent: "center", zIndex: 5,
  },

  roads: { position: "absolute", opacity: 0.7 },
  road1: { fontSize: 28, color: "#F3F0E8" },
  road2: { fontSize: 35, color: "#F3F0E8" },
  road3: { fontSize: 25, color: "#F3F0E8" },

  routeLine: {
    position: "absolute",
    width: "65%",
    height: 2,
    borderTopWidth: 2,
    borderStyle: "dashed",
    borderColor: "#F4512A",
    transform: [{ rotate: "-10deg" }],
  },

 
  

  traffic: {
    position: "absolute", bottom: 30, left: 18,
    backgroundColor: "#124075", padding: 10,
    borderRadius: 18,
  },
  white: { color: "#fff", fontSize: 12 },

  sheet: {
    flex: 1, backgroundColor: "#fff",
    marginTop: -2, borderTopLeftRadius: 25,
    borderTopRightRadius: 25, padding: 18,  paddingBottom: 75,
  },

  small: { color: "#9AA1A9", fontWeight: "600" },

  timeRow: {
    flexDirection: "row", alignItems: "center",
    justifyContent: "space-between",
  },
  time: { fontSize: 32, fontWeight: "700", color: "#172535" },
  distance: { color: "#8F979F", fontSize: 12 },

  modes: { flexDirection: "row", gap: 8, marginVertical: 14 },
  active: {
    flex: 1, textAlign: "center", padding: 11,
    borderRadius: 15, borderWidth: 1,
    borderColor: "#F4512A", color: "#F4512A",
    fontWeight: "600",
  },
  mode: {
    flex: 1, textAlign: "center", padding: 11,
    borderRadius: 15, borderWidth: 1,
    borderColor: "#E5E7E9", color: "#172535",
  },

  locations: {
    backgroundColor: "#F5F6F7",
    borderRadius: 15, padding: 14, gap: 10,
  },
  loc: { color: "#172535", fontSize: 13, fontWeight: "600" },

  turnTitle: { color: "#9AA1A9", marginTop: 1, marginBottom: 2 },

  turn: {
    flexDirection: "row", alignItems: "center",
    gap: 10, paddingVertical: 10,
    borderBottomWidth: 1, borderBottomColor: "#E8EAEC",
  },
  arrow: { fontSize: 20 },
  flex: { flex: 1 },
  turnMain: { fontWeight: "600", color: "#172535", fontSize: 13 },
  turnSub: { color: "#9AA1A9", fontSize: 11, marginTop: -12 },

  button: {
    backgroundColor: "#F4512A", height: 54,
    borderRadius: 16, alignItems: "center",
    justifyContent: "center", marginTop: -3,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "700" },
});
