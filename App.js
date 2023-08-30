import { useState, useEffect } from "react";
import {
  Text,
  View,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
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

  let calculate = (operator) => {
    let mresult = 0;
    let mvalue1 = parseFloat(value1);
    let mvalue2 = parseFloat(value2);
    switch (operator) {
      case "+":
        mresult = mvalue1 + mvalue2;
        break;
      case "-":
        mresult = mvalue1 - mvalue2;
        break;
      case "*":
        mresult = mvalue1 * mvalue2;
        break;
      case "/":
        mresult = mvalue1 / mvalue2;
        break;
    }
    setResult(mresult); //actualizando la vble de estado result
  };

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
          label="Valor Uno"
          onChangeText={(value1) => setValue1(value1)}
          value={value1}
          style={{ backgroundColor: "powderblue" }}
          left={<TextInput.Icon icon="account" />}
        />
        <Text>Numero 2</Text>
        <TextInput
          label="Valor Dos"
          onChangeText={(value2) => setValue2(value2)}
          value={value2}
          style={{ backgroundColor: "powderblue" }}
          right={<TextInput.Icon icon="account" />}
        />
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Button icon="plus" mode="contained" onPress={() => calculate("+")}>
            Suma
          </Button>
          <Button icon="minus" mode="contained" onPress={() => calculate("-")}>
            Resta
          </Button>
        </View>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Button
            icon="multiplication"
            mode="contained"
            onPress={() => calculate("*")}
          >
            Multiplicación
          </Button>
          <Button
            icon="slash-forward"
            mode="contained"
            onPress={() => calculate("/")}
          >
            División
          </Button>
        </View>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Button
            buttonColor="red"
            icon="close-circle-outline"
            mode="contained"
            onPress={() => {
              setValue1("")
              setValue2("")
              setResult("")
            }}
          >
            Limpiar
          </Button>
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
        <Text>Resultado</Text>
        <Text>{parseFloat(result).toFixed(1)}</Text>
      </View>
      <Footer text={mymess} />
    </View>
  );
}
