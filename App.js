import { StyleSheet, Text, View } from "react-native";
import { Banner } from "./src/components/Banner";
import { Footer } from "./src/components/Footer";
import {styles,myimage} from './assets/Styles/Styles1';

export default function App() {
  let mymess = 'Se implementa correo, telefono'
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>My First Calculator</Text>
        <Text style={{color:'red',fontWeight:'bold'}}>My First Calculator</Text> 
        <Banner title = 'Banner' subtitle = 'Imagen'/>
        <Footer text ={mymess}/>
      </View>
    </View>
  );
}


