import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Touchable,
} from "react-native";
import { Banner } from "./src/components/Banner";
import { Footer } from "./src/components/Footer";
import { styles, myimage } from "./assets/styles/Styles1";

export default function App() {
  //states
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [result, setResult] = useState("");
  //

  let mymess = "Se implementa correo, telefono";
  let image = "calculadora.png";
  return (
    <View style={styles.container}>
      <Banner image={image} />
      <View
        style={{
          flex: 4,
          backgroundColor: "gray",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Calculadora</Text>
        <Text>Numero 1</Text>
        <TextInput
          placeholder="Ingrese valor 1"
          onChangeText={(value1) => setValue1(value1)}
          value={value1}
          style={styles.tinputs}
        />
        <Text>Numero 2</Text>
        <TextInput
          placeholder="Ingrese valor 2"
          onChangeText={(value2) => setValue2(value2)}
          value={value2}
          style={styles.tinputs}
        />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={{ backgroundColor: "red" }}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: "gray",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Cuerpo</Text>
      </View>
      <Footer text={mymess} />
    </View>
  );
}
