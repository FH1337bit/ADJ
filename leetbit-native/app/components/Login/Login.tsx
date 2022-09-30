import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
} from "react-native";
import SignaturePad from "signature_pad";
import Canvas from "../Canvas";

const Login: React.FC = () => {
    const [text, onChangeText] = React.useState("PepePeppega@pepe.com");
    const [number, onChangeNumber] = React.useState("");

    const canv = document.createElement('canvas');
    document.body.appendChild(canv);
    const canvas = document.querySelector("canvas");
    const signaturePad = new SignaturePad(canvas as HTMLCanvasElement);
    signaturePad.toDataURL("image/svg+xml");
    
    return (
      <View style={styles.container}>
        {/* <Text> Hello Veevero! </Text> <StatusBar style="auto" /> */}
        {/* <Image
          style={styles.mediumLogo}
          source={require("./assets/profilePicPraying.png")}
        /> */}
        <Canvas text={number} />
        <Text style={styles.name}>Pepe Peppega</Text>
        <Text style={styles.function}>Veevero team leader</Text>
        <SafeAreaView>
          <Text style={styles.title}>Login:</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="Enter you nickname"
            value={text}
          />
          <Text style={styles.title}>Password:</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Enter your password"
            keyboardType="numeric"
          />
          <SafeAreaView style={styles.area1}>
            <Button
              title="Log in"
              onPress={() => Alert.alert("Simple Button pressed")}
            />
            <Text style={styles.tinyTitle}>Forgot password</Text>
          </SafeAreaView>
        </SafeAreaView>
      </View>
    );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8DDBE0",
    alignItems: "center",
    justifyContent: "center",
  },
  area1: {
    alignItems: "center",
  },
  name: { marginBottom: 4, fontWeight: "800" },
  function: {
    marginBottom: 16,
    color: "#6D7170",
  },
  title: {
    marginBottom: 8,
    color: "#6D7170",
  },
  tinyTitle: {
    fontSize: 12,
    marginBottom: 4,
    color: "#6D7170",
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  mediumLogo: {
    width: 160,
    height: 160,
    borderRadius: 100,
    marginBottom: 8,
  },
});
