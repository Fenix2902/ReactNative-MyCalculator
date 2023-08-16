import { StyleSheet,Text,View } from "react-native";

export function Footer(props){
    return(
        <>
        <View>
            <Text style ={Styles.text}>Footer {props.text}</Text>
        </View>
        </>
    )
}
const Styles = StyleSheet.create({
    text:{
        color:'#000000',
        fontSize:18,
        fontWeight:'bold',
        fontStyle:'italic'
      }
})