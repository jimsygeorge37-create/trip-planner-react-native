
import { useState } from "react";
import {Alert,KeyboardAvoidingView,Platform,ScrollView,StyleSheet,Text,View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import Input from "@/components/Input";
import Button from "@/components/Button";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (!email) return Alert.alert("Error", "Email is required");

    if (!email.includes("@") || !email.includes("."))
      return Alert.alert("Error", "Enter a valid email");

    if (!password) return Alert.alert("Error", "Password is required");

    if (password.length < 6)
      return Alert.alert("Error", "Password must be 6 characters");

    router.push("/locations");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>➤</Text>
          </View>

          <Text style={styles.title}>Welcome back</Text>

          <Text style={styles.subtitle}>
            Log in to plan a trip and follow your route turn by turn.
          </Text>

          <Text style={styles.label}>Email</Text>

          <Input
            placeholder="you@example.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Password</Text>

          <Input
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Text style={styles.forgot}>Forgot password?</Text>

          <View style={styles.bottom}>
            <Button title="Log in" onPress={login} />

            <Text style={styles.newUser}>
              New to Wayfare?{" "}
              <Text style={styles.create}>Create an account</Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6F8",
  },

  content: {
    flexGrow: 1,
    padding: 23,
    paddingTop: 35,
  },

  logo: {
    width: 58,
    height: 58,
    borderRadius: 17,
    backgroundColor: "#F4512A",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 28,
  },

  logoText: {
    color: "white",
    fontSize: 28,
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#142333",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 15,
    color: "#9299A3",
    marginBottom: 30,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#202B37",
    marginTop: 5,
    marginBottom: 10,
  },

  forgot: {
    color: "#E85A36",
    marginTop: 14,
  },

  bottom: {
    marginTop: "auto",
    paddingTop: 30,
  },

  newUser: {
    textAlign: "center",
    color: "#9AA1A9",
    marginTop: 18,
  },

  create: {
    color: "#1D2935",
    fontWeight: "700",
  },
});
