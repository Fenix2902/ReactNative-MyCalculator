// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Banner } from "./src/components/Banner";
import { Footer } from "./src/components/Footer";

export default function App() {
  let mymess = 'Se implementa correo, telefono'
  return (
    <View style={styles.container}>
      <View>
        <Text>My First Calculator</Text>
        <Banner title = 'Banner' subtitle = 'Imagen'/>
        <Footer text ={mymess}/>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
