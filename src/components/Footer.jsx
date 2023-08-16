import { StyleSheet,Text,View } from "react-native";

export function Footer(props){
    return(
        <>
        <View>
            <Text>Footer {props.text}</Text>
        </View>
        </>
    )
}